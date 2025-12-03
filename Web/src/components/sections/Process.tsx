"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Search, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Знакомство",
    description:
      "Обсуждаем Ваши цели, изучаем бизнес и конкурентов. Формируем понимание задачи.",
    duration: "1-2 дня",
  },
  {
    icon: Search,
    number: "02",
    title: "Анализ и стратегия",
    description:
      "Исследуем рынок, целевую аудиторию. Разрабатываем стратегию продвижения.",
    duration: "3-5 дней",
  },
  {
    icon: Palette,
    number: "03",
    title: "Реализация",
    description:
      "Создаём дизайн, разрабатываем сайт, настраиваем рекламные кампании.",
    duration: "2-6 недель",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Запуск и рост",
    description:
      "Запускаем проект, анализируем результаты, оптимизируем для роста показателей.",
    duration: "Постоянно",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 lg:py-32 bg-secondary text-white relative overflow-hidden"
      data-testid="section-process"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Как мы работаем
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            От идеи до <span className="text-primary">результата</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Прозрачный процесс работы с чёткими этапами и сроками
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative pt-0">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                  data-testid={`process-step-${index}`}
                >
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-md bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 relative z-10">
                        <step.icon
                          size={32}
                          className="text-primary group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="text-5xl font-bold text-white/10 group-hover:text-primary/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12"
                data-testid={`process-step-${index}`}
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-3 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
                )}

                <div className="absolute left-0 top-5 w-6 h-6 rounded-full bg-primary border-4 border-secondary flex items-center justify-center"></div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-md bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <step.icon
                        size={24}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <span className="text-4xl font-bold text-white/10 group-hover:text-primary/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-3 text-sm">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
