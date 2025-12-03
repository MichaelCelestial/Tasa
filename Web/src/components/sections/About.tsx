"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Target, Zap, TrendingUp, Users } from "lucide-react";

const stats = [
  { value: "10+", label: "Проектов" },
  { value: "2", label: "Года опыта" },
  { value: "87%", label: "Довольных клиентов" },
  { value: "1.7x", label: "Средний рост продаж" },
];

const features = [
  {
    icon: Target,
    title: "Точное попадание",
    description: "Анализируем Вашу аудиторию и создаём стратегию, которая работает именно для Вашего бизнеса",
  },
  {
    icon: Zap,
    title: "Быстрый результат",
    description: "Первые результаты уже через 2-4 недели после запуска рекламных кампаний",
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description: "Помогаем расти: от стартапа до крупной компании с системным маркетингом",
  },
  {
    icon: Users,
    title: "Команда экспертов",
    description: "Дизайнеры, разработчики, маркетологи — все под одной крышей для Вашего проекта",
  },
];

const titleWords = ["Превращаем", "идеи", "в"];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
      data-testid="section-about"
    >
      <motion.div 
        className="absolute -top-10 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
        style={{ y: parallaxY }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ scale: scaleProgress }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              О студии
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
              <span className="inline-block overflow-hidden">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.1,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br />
              <motion.span 
                className="text-primary inline-block"
                initial={{ y: 100, opacity: 0, scale: 0.8 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                результат
              </motion.span>
            </h2>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Мы — команда профессионалов, которая специализируется на комплексном
              продвижении бизнеса в digital-среде. Наш подход — создание синергии
              между всеми каналами маркетинга для достижения максимального эффекта.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Каждый проект начинается с глубокого анализа и заканчивается
              измеримыми результатами. Мы не просто создаём сайты и запускаем рекламу —
              мы строим систему привлечения клиентов для Вашего бизнеса.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
                className="bg-white border border-border rounded-md p-6 text-center hover:border-primary/30 transition-colors cursor-default"
                data-testid={`stat-${index}`}
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
              data-testid={`feature-${index}`}
            >
              <motion.div 
                className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={24} className="text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
