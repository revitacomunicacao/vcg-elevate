import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";
import { fetchCartaoVirtualContent } from "@/cms/cartaoVirtual";

const CartaoVirtual = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCartaoVirtualContent(controller.signal)
      .then((content) => setPdfUrl(content.pdfUrl))
      .catch(() => setPdfUrl(null));
    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className="flex-1 flex flex-col bg-background"
        style={{ paddingTop: `${NAVBAR_OFFSET_PX}px` }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-6 flex-1 flex flex-col min-h-0">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Cartão Virtual
          </h1>
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title="Cartão Virtual"
              className="w-full flex-1 min-h-[70vh] rounded-md border border-border bg-muted"
              allow="fullscreen"
            />
          ) : (
            <div className="w-full flex-1 min-h-[70vh] rounded-md border border-border bg-muted" />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartaoVirtual;
