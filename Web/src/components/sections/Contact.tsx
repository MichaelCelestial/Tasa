"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { submitForm } from "@/lib/actions";

const TelegramIcon = ({ size = 20, className = "", ...rest }: any) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...rest}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (949) 489-02-40",
    href: "tel:+79494890240",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@digitalstudio.ru",
    href: "mailto:hello@digitalstudio.ru",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "@tsebulenko_agency_manager",
    href: "https://t.me/tsebulenko_agency_manager",
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitForm(formData);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-muted/30 relative"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Контакты
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-6">
            Готовы <span className="text-primary">начать?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами для обсуждения Вашего проекта
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-secondary text-sm font-medium mb-2 block">
                    Имя <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="Как вас зовут?"
                    className="bg-white"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label className="text-secondary text-sm font-medium mb-2 block">
                    Email<span className="text-primary">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label className="text-secondary text-sm font-medium mb-2 block">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-white"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <label className="text-secondary text-sm font-medium mb-2 block">
                  Описание проекта/Причина заявки
                  <span className="text-primary">*</span>
                </label>
                <Textarea
                  required
                  placeholder="Расскажите о Вашем проекте/заявке..."
                  rows={5}
                  className="bg-white resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto font-medium"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                    />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                    data-testid={`link-contact-${item.label.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon
                        size={20}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-md bg-secondary text-white">
              <h4 className="text-lg font-bold mb-2">Быстрый ответ</h4>
              <p className="text-white/70 mb-4">
                Мы отвечаем на заявки в течение 2-х часов в рабочее время
              </p>
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium">Сейчас онлайн</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Кастомный тост */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50"
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-secondary">Заявка отправлена!</p>
              <p className="text-sm text-muted-foreground mt-1">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-primal hover:text-red-700 transition-colors flex-shrink-0 outline-none focus:outline-none"
              style={{ boxShadow: "none" }}
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
