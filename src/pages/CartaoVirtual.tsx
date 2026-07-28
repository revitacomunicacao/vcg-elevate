import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NAVBAR_OFFSET_PX } from "@/lib/logo";
import { fetchCartaoVirtualContent } from "@/cms/cartaoVirtual";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const CartaoVirtual = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCartaoVirtualContent(controller.signal)
      .then((content) => setPdfUrl(content.pdfUrl))
      .catch(() => setPdfUrl(null));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    const updateWidth = () => {
      setPageWidth(Math.floor(el.clientWidth));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, [pdfUrl]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className="flex-1 flex flex-col bg-background"
        style={{ paddingTop: `${NAVBAR_OFFSET_PX}px` }}
      >
        <div className="flex-1 flex justify-center px-4 lg:px-8 py-6">
          {/* Mobile: largura total | Desktop: 50vw centralizado */}
          <div ref={viewerRef} className="w-full md:w-[50vw] max-w-full">
            {pdfUrl && pageWidth > 0 ? (
              loadError ? (
                <div className="rounded-md border border-border bg-muted p-8 text-center">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-sans text-sm"
                  >
                    Abrir PDF
                  </a>
                </div>
              ) : (
                <Document
                  file={pdfUrl}
                  loading={<div className="min-h-[50vh] rounded-md bg-muted" />}
                  onLoadSuccess={({ numPages: pages }) => {
                    setNumPages(pages);
                    setLoadError(false);
                  }}
                  onLoadError={() => setLoadError(true)}
                  externalLinkTarget="_blank"
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={pageWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer
                      className="!bg-transparent [&_.react-pdf__Page__canvas]:max-w-full [&_.react-pdf__Page__canvas]:h-auto"
                    />
                  ))}
                </Document>
              )
            ) : (
              <div className="min-h-[50vh] w-full rounded-md bg-muted" />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartaoVirtual;
