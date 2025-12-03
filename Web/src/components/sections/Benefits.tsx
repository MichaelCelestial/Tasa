"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Clock,
  BarChart3,
  Headphones,
  RefreshCw,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Гарантия результата",
    description:
      "Прописываем KPI в договоре. Если не достигаем — корректируем стратегию за наш счёт.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description:
      "Все услуги в одном месте. Не нужно координировать работу разных подрядчиков.",
  },
  {
    icon: BarChart3,
    title: "Прозрачная аналитика",
    description:
      "Ежемесячные отчёты с понятными метриками. Вы всегда знаете, куда идут Ваши деньги.",
  },
  {
    icon: Headphones,
    title: "Персональный менеджер",
    description:
      "Выделенный специалист на связи в рабочее время. Быстрые ответы на Ваши вопросы.",
  },
  {
    icon: RefreshCw,
    title: "Гибкость",
    description:
      "Масштабируем бюджеты и каналы под текущие задачи бизнеса. Без длинных контрактов.",
  },
  {
    icon: Award,
    title: "Экспертиза",
    description:
      "Команда сертифицированных специалистов. Регулярное обучение и применение лучших практик.",
  },
];

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="benefits"
      ref={ref}
      className="py-24 lg:py-32 bg-white relative"
      data-testid="section-benefits"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Почему мы
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Преимущества работы
            <br />
            <span className="text-primary">с нашей студией</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы ценим Ваше время и деньги, поэтому выстроили процессы
            для максимальной эффективности
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-md bg-white border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <benefit.icon
                  size={24}
                  className="text-primary group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
