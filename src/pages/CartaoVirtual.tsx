import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
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
    <div className="fixed inset-0 flex items-start justify-center overflow-auto bg-background">
      {/* Mobile: largura total | Desktop: 50vw centralizado */}
      <div ref={viewerRef} className="w-full md:w-[50vw] max-w-full">
        {pdfUrl && pageWidth > 0 ? (
          loadError ? (
            <div className="flex min-h-screen items-center justify-center p-8 text-center">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-primary underline"
              >
                Abrir PDF
              </a>
            </div>
          ) : (
            <Document
              file={pdfUrl}
              loading={<div className="min-h-screen bg-background" />}
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
          <div className="min-h-screen w-full bg-background" />
        )}
      </div>
    </div>
  );
};

export default CartaoVirtual;
