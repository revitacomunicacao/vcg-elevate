import { useEffect } from "react";
import { motion } from "framer-motion";

const ELFSIGHT_PLATFORM_SCRIPT = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_APP_CLASS = "elfsight-app-506b5156-d3fa-4dbb-992f-f9e222377a82";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5 },
};

/** Elfsight Instagram Feed — widget ID 506b5156-d3fa-4dbb-992f-f9e222377a82 */
const InstagramFeed = () => {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${ELFSIGHT_PLATFORM_SCRIPT}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = ELFSIGHT_PLATFORM_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.div {...fadeUp} className="max-w-4xl mx-auto mt-16 w-full">
      <div className={ELFSIGHT_APP_CLASS} data-elfsight-app-lazy />
    </motion.div>
  );
};

export default InstagramFeed;
