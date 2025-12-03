"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, Share2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "TechStart",
    category: "IT-стартап",
    description:
      "Разработка сайта и комплексное digital-продвижение для технологического стартапа",
    results: "+340% заявок за 3 месяца",
    services: ["Сайт", "SMM", "Контекст"],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "GreenFood",
    category: "Доставка еды",
    description:
      "Интернет-магазин с интеграцией CRM и performance-маркетинг для сервиса доставки",
    results: "2x рост продаж",
    services: ["E-commerce", "Контекст"],
    gradient: "from-green-600 to-teal-600",
  },
  {
    id: 3,
    title: "LuxHome",
    category: "Недвижимость",
    description:
      "Премиальный сайт и SMM-продвижение для агентства элитной недвижимости",
    results: "150+ лидов/мес",
    services: ["Сайт", "SMM"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    id: 4,
    title: "FitLife",
    category: "Фитнес",
    description:
      "Лендинг и таргетированная реклама для сети фитнес-студий",
    results: "-60% стоимость лида",
    services: ["Лендинг", "Таргет"],
    gradient: "from-pink-600 to-red-600",
  },
];

const serviceIcons: Record<string, typeof Globe> = {
  Сайт: Globe,
  "E-commerce": Globe,
  Лендинг: Globe,
  SMM: Share2,
  Таргет: Share2,
  Контекст: Target,
};

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 lg:py-32 bg-muted/30 relative"
      data-testid="section-portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Портфолио
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Наши <span className="text-primary">кейсы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты для реальных клиентов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-md overflow-hidden bg-white border border-border cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-testid={`portfolio-card-${index}`}
            >
              <div
                className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} relative`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <Button
                        variant="outline"
                        className="text-black border-white hover:bg-white hover:text-primary"
                        data-testid={`button-view-project-${index}`}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Смотреть кейс
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.category}
                    </p>
                  </div>
                  <span
                    className="bg-primary/10 text-primary border-0 whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {project.results}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  {project.services.map((service) => {
                    const Icon = serviceIcons[service] || Globe;
                    return (
                      <div
                        key={service}
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-muted rounded-md text-sm"
                      >
                        <Icon size={14} className="text-primary" />
                        <span className="text-secondary font-medium">
                          {service}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
