"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Share2, Target, Plus, ArrowRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Стартовый пакет",
    subtitle: "Для начинающего бизнеса",
    price: "от 30 000 ₽",
    services: [
      { icon: Globe, name: "Лендинг" },
      { icon: Target, name: "Контекст" },
    ],
    description:
      "Быстрый запуск: создаём продающий лендинг и настраиваем контекстную рекламу для первых клиентов",
    popular: false,
  },
  {
    title: "Оптимальный пакет",
    subtitle: "Для растущего бизнеса",
    price: "от 55 000 ₽",
    services: [
      { icon: Globe, name: "Сайт" },
      { icon: Share2, name: "SMM" },
      { icon: Target, name: "Контекст/Таргет" },
    ],
    description:
      "Полный цикл: многостраничный сайт, присутствие в соцсетях и реклама — всё для системного роста",
    popular: true,
  },
  {
    title: "Премиум пакет",
    subtitle: "Для масштабирования",
    price: "от 100 000 ₽",
    services: [
      { icon: Globe, name: "Сайт" },
      { icon: Share2, name: "SMM PRO" },
      { icon: Target, name: "Все каналы трафика" },
    ],
    description:
      "Максимум результата: интернет-магазин, продвинутый SMM и performance-маркетинг с глубокой аналитикой",
    popular: false,
  },
];

export function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solutions"
      ref={ref}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      data-testid="section-solutions"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Готовые решения
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Связки услуг для
            <br />
            <span className="text-primary">максимального эффекта</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите готовый пакет или создайте индивидуальное решение под
            задачи Вашего бизнеса
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
              data-testid={`solution-card-${index}`}
            >
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    <Zap size={14} className="mr-1" />
                    Популярный выбор
                  </span>
                </div>
              )}
              <Card
                className={`h-full ${
                  solution.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "hover:border-primary/30"
                } transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">{solution.subtitle}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-6 flex-wrap">
                    {solution.services.map((service, i) => (
                      <div key={service.name} className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
                          <service.icon size={16} className="text-primary" />
                          <span className="text-sm font-medium text-secondary">
                            {service.name}
                          </span>
                        </div>
                        {i < solution.services.length - 1 && (
                          <Plus size={14} className="text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-3xl font-bold text-secondary">
                      {solution.price}
                    </span>
                  </div>

                  {solution.popular ? (
                    // Центральная кнопка: красный фон, белый текст, при наведении наоборот
                    <button
                      onClick={() => {
                        const el = document.querySelector("#contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      data-testid={`button-solution-${index}`}
                      className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary hover:border-primary"
                    >
                      Выбрать пакет
                      <ArrowRight size={16} className="ml-2 inline" />
                    </button>
                  ) : (
                    // Левая и правая кнопки: белый фон, красный текст, при наведении красный фон, белый текст
                    <button
                      onClick={() => {
                        const el = document.querySelector("#contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      data-testid={`button-solution-${index}`}
                      className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                    >
                      Выбрать пакет
                      <ArrowRight size={16} className="ml-2 inline" />
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Нужно индивидуальное решение?
          </p>
          <Button
            variant="ghost"
            className="font-medium text-primary"
            onClick={() => {
              const el = document.querySelector("#contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-custom-solution"
          >
            Обсудить Ваш проект
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
