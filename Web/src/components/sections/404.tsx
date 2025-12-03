"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

export function NotFoundSection() {
  const containerRef = useRef(null); // ✅ Основной контейнер
  const isInView = useInView(containerRef, { once: true, margin: "-100px" }); // ✅ Проверяем сам контейнер

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      ref={containerRef} // ✅ Привязываем ref!
      className="relative py-40 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/10 -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // ✅ Теперь это будет работать
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#b65252" }}
          >
            Ошибка
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="text-gray-900 dark:text-white">Страница</span>
            <br />
            <span style={{ color: "#b65252" }}>не найдена</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Похоже, вы ищете страницу, которой больше не существует. Может быть,
            ссылка устарела или произошла ошибка в адресе. Вернитесь на главную
            страницу и продолжите изучение.
          </p>
        </motion.div>

        {/* Error code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="text-8xl md:text-9xl font-black flex justify-center items-center gap-2 md:gap-4">
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 bg-clip-text text-transparent opacity-30">
              4
            </span>
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-[15px]">
              <div
                className="absolute rounded-full"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(128, 128, 128, 0.2)",
                  zIndex: 1,
                }}
              />

              <div
                className="absolute rounded-full"
                style={{
                  width: "50%",
                  height: "50%",
                  backgroundColor: "white",
                  zIndex: 2,
                  border: "5px solid #b65252",
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.1))" }}
                >
                  <line
                    x1="67"
                    y1="67"
                    x2="82"
                    y2="82"
                    stroke="#b65252"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 bg-clip-text text-transparent opacity-30">
              4
            </span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="https://tsebulenko-agency.ru/">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 border-2"
              style={{
                backgroundColor: "#b65252",
                color: "white",
                borderColor: "#b65252",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#b65252";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#b65252";
                e.currentTarget.style.color = "white";
              }}
            >
              Вернуться на главную
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
