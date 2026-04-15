import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5534998850315";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/90 text-secondary-foreground shadow-lg transition-transform hover:bg-secondary/90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloatingButton;

