"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Globe, Share2, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Разработка сайтов",
    description:
      "Создаём современные, быстрые и конверсионные сайты: от лендингов до сложных интернет-магазинов и корпоративных порталов.",
    features: [
      "UI/UX дизайн",
      "Адаптивная вёрстка",
      "Интеграция с CRM",
      "SEO-оптимизация",
    ],
  },
  {
    icon: Share2,
    title: "SMM продвижение",
    description:
      "Выстраиваем присутствие бренда в социальных сетях: контент-стратегия, визуал, таргетированная реклама и работа с аудиторией.",
    features: [
      "Контент-план",
      "Визуальный стиль",
      "Таргетированная реклама",
      "Аналитика и отчёты",
    ],
  },
  {
    icon: Target,
    title: "Контекстная/Таргетировнная реклама",
    description:
      "Настраиваем и оптимизируем рекламу в Яндекс.Директ и Google Ads для максимальной отдачи от каждого вложенного рубля.",
    features: [
      "Аудит и стратегия",
      "Настройка кампаний",
      "A/B тестирование",
      "Оптимизация ROI",
    ],
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const card1Y = useTransform(scrollYProgress, [0.2, 0.5], ["40px", "0px"]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.5], ["60px", "0px"]);
  const card3Y = useTransform(scrollYProgress, [0.2, 0.5], ["80px", "0px"]);

  const cardTransforms = [card1Y, card2Y, card3Y];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
      data-testid="section-services"
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </motion.div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Наши услуги
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Три столпа <span className="text-primary">успешного</span>
            <br />
            digital-продвижения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждая услуга работает как самостоятельный инструмент, но вместе они
            создают мощную систему привлечения клиентов
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ y: cardTransforms[index] }}
              data-testid={`service-card-${index}`}
            >
              <Card className="h-full group hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-[#b65252] transition-colors duration-300">
                      <service.icon
                        size={28}
                        className="text-primary group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-4">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-secondary">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary hover:bg-transparent"
                      onClick={() => {
                        const el = document.querySelector("#contact");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      data-testid={`button-service-${index}`}
                    >
                      Подробнее
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
