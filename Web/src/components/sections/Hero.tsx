"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FloatingShapes3D = dynamic(
  () =>
    import("@/components/3d/FloatingShapes").then(
      (mod) => mod.FloatingShapes3D
    ),
  { ssr: false, loading: () => null }
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50"
      data-testid="section-hero"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y }}
      >
        <Suspense fallback={null}>
          <FloatingShapes3D />
        </Suspense>
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pt-16 sm:pt-20 pb-24 sm:pb-32"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 md:mb-8 mx-auto"
        >
          <Sparkles size={16} />
          <span className="text-sm md:text-sm font-medium whitespace-nowrap">
            Диджитал-студия полного цикла
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-[0.9] mb-6 md:mb-8"
        >
          Комплексные
          <br />
          <span style={{ color: "#b65252" }}>решения</span>
          <br />
          для бизнеса
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2"
        >
          Создаём эффективные связки для максимального результата Вашего
          продвижения
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-hero-cta"
            className="px-8 py-3 text-white rounded-lg font-medium transition-colors w-full sm:w-auto"
            style={{ backgroundColor: "#b65252" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#fff", e.currentTarget.style.border = "2px solid #b65252", e.currentTarget.style.color = "#b65252")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#b65252", e.currentTarget.style.border = "2px solid #b65252", e.currentTarget.style.color = "#fff")
            }
          >
            Начать проект
          </button>
          <button
            onClick={() => {
              const el = document.querySelector("#portfolio");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-hero-portfolio"
            className="px-8 py-3 border-2 text-slate-900 rounded-lg font-medium transition-colors w-full sm:w-auto"
            style={{ borderColor: "#b65252", color: "#b65252" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#b65252";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#b65252";
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#b65252";
            }}
          >
            Смотреть кейсы
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 transition-colors z-20"
        style={{ color: "#666" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#b65252")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
        data-testid="button-scroll-down"
      >
        <span className="text-md md:text-md font-medium">Узнать больше</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
