"use client";

import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Разработка сайтов", href: "#services" },
    { label: "SMM продвижение", href: "#services" },
    { label: "Контекстная реклама", href: "#services" },
    { label: "Таргетировнная реклама", href: "#services" },
    { label: "Комплексные решения", href: "#solutions" },
  ],
  company: [
    { label: "О нас", href: "#about" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Процесс работы", href: "#process" },
    { label: "Контакты", href: "#contact" },
  ],
};

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const VKIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.455 2.27 4.607 2.861 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.644v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.61 2.18-3.61.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 16 16" fill="white" className="w-5 h-5">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const socialLinks = [
  {
    href: "https://t.me/tsebulenko_agency",
    label: "Telegram",
    icon: TelegramIcon,
  },
  { href: "https://vk.com/tsebulenko_agency", label: "VK", icon: VKIcon },
  {
    href: "https://www.instagram.com/tsebulenko_agency",
    label: "Instagram",
    icon: InstagramIcon,
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white pt-16 pb-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              data-testid="link-footer-logo"
            >
              <img
                src="/logo.jpg"
                alt="Tsebulenko Agency Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <span className="font-bold text-xl tracking-tight">
                Tsebulenko <span className="text-primary">Agency</span>
              </span>
            </motion.a>
            <p className="text-white/60 leading-relaxed mb-6">
              Диджитал-студия полного цикла. Создаём эффективные решения для
              роста Вашего бизнеса.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            <p className="text-white/60 leading-relaxed mt-4">
              * Meta и Instagram - запрещены в РФ.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Услуги</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Компания</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a
                  href="https://t.me/tsebulenko_agency_manager"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-tg"
                >
                  @tsebulenko_agency_manager
                </a>
              </li>
              <li>
                <a
                  href="mailto:manager@tsebulenko-agency.ru"
                  className="hover:text-primary transition-colors"
                  data-testid="link-footer-email"
                >
                  manager@tsebulenko-agency.ru
                </a>
              </li>
              <li>Донецкая область, г. Донецк</li>
              <li className="text-sm">Пн-Сб: 10:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Tsebulenko Agency. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="http://tsebulenko-agency.ru/privacy-policy.pdf" className="hover:text-white/60 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="http://tsebulenko-agency.ru/public-offer.pdf" className="hover:text-white/60 transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
