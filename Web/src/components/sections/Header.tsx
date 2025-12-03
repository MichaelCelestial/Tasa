"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#solutions", label: "Решения" },
  { href: "#process", label: "Процесс" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="https://tsebulenko-agency.ru/"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              data-testid="link-logo"
            >
              <img
                src="/logo.jpg"
                alt="Tsebulenko Agency Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <span className="font-bold text-xl tracking-tight text-secondary">
                Tsebulenko <span className="text-primary">Agency</span>
              </span>
            </motion.a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors relative group"
                  whileHover={{ y: -2 }}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-2 bg-white font-medium text-primary border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
                data-testid="button-cta-header"
              >
                Обсудить проект
              </Button>
            </div>

            <button
              className="lg:hidden px-7 text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-medium text-secondary text-left"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-4 w-full"
                size="lg"
                data-testid="button-mobile-cta"
              >
                Обсудить проект
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
