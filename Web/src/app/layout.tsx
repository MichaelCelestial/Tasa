import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#b65252" },
    { media: "(prefers-color-scheme: dark)", color: "#b65252" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Диджитал Агентство Донецк | Сайты, SMM, Таргет | ТСА",
  description:
    "ТСА — полный цикл digital услуг в Донецке. Разработка сайтов на Next.js, SMM, таргет, Яндекс Директ. Получите бесплатный аудит за 10 минут.",

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://tsebulenko-agency.ru",
  },
  formatDetection: {
    telephone: false,
  },

  keywords: [
    "сайты в донецке",
    "создание сайтов донецк",
    "разработка сайтов в донецке",
    "дизайн сайтов донецк",
    "таргет в донецке",
    "таргетированная реклама донецк",
    "контекст в донецке",
    "контекстная реклама донецк",
    "купить контекст в донецке",
    "SMM в донецке",
    "социальные сети донецк",
    "яндекс директ донецк",
    "директ в донецке",
    "диджитал агентство донецк",
    "продвижение сайта донецк",
    "веб-студия донецк",
    "ТСА донецк",
    "Цыбуленко",
    "Tsebulenko",
    "TSA агентство",
    "цифровой маркетинг донецк",
    "интернет маркетинг донецк",
  ].join(", "),

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "256x256", type: "image/jpg" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tsebulenko-agency.ru",
    siteName: "TSA",
    title: "TSA | Диджитал Агентство Донецк",
    description:
      "Разработка сайтов, SMM, таргет, контекст. Реальные результаты: +300% трафика",
    images: [
      {
        url: "https://tsebulenko-agency.ru/apple-touch-icon.jpg",
        width: 1200,
        height: 630,
        alt: "TSA - Диджитал Агентство Донецк",
        type: "image/jpeg",
        secureUrl: "https://tsebulenko-agency.ru/apple-touch-icon.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TSA | Диджитал Агентство",
    description: "Полный цикл digital услуг в Донецке",
    images: ["https://tsebulenko-agency.ru/apple-touch-icon.jpg"],
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tsebulenko-agency.ru",
    name: "TSA | ТСА - Диджитал-Агентство Донецк",
    alternateName: "Tsebulenko Agency",
    image: "https://tsebulenko-agency.ru/apple-touch-icon.jpg",
    logo: "https://tsebulenko-agency.ru/apple-touch-icon.jpg",
    description:
      "Комплексные диджитал решения для продвижения бизнеса. Разработка сайтов, SMM, таргет, контекст, Яндекс Директ.",

    founder: {
      "@type": "Person",
      name: "Цыбуленко",
      alternateName: "Tsebulenko",
      jobTitle: "Founder & CEO",
      url: "https://tsebulenko-agency.ru",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Артёма, д. 45",
      addressLocality: "Донецк",
      addressRegion: "Донецкая область",
      postalCode: "83000",
      addressCountry: "RU",
    },

    telephone: "+7-949-489-02-40",
    email: "manager@tsebulenko-agency.ru",
    url: "https://tsebulenko-agency.ru",

    sameAs: [
      "https://www.instagram.com/tsebulenko_agency",
      "https://www.vk.com/tsebulenko_agency",
      "https://t.me/tsebulenko_agency",
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Донецк",
      },
      {
        "@type": "AdministrativeArea",
        name: "Донецкая область",
      },
    ],

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },

    priceRange: "$$",

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+7-949-489-02-40",
      email: "manager@tsebulenko-agency.ru",
      areaServed: "RU",
      availableLanguage: "ru",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceSchema() {
  const services = [
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-web-dev",
      name: "Разработка сайтов в Донецке",
      description:
        "Профессиональная разработка сайтов на Next.js с полной SEO оптимизацией и адаптивным дизайном",
      serviceType: "Web Development",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: "25000",
        priceValidUntil: "2025-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "18",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-smm",
      name: "SMM управление в Донецке",
      description:
        "Управление социальными сетями: Instagram, VK, Telegram. Стратегия, контент, реклама",
      serviceType: "Social Media Marketing",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: "15000",
        priceValidUntil: "2025-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "23",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-context",
      name: "Контекстная реклама в Донецке",
      description:
        "Запуск и оптимизация контекстных кампаний в Google Ads и Яндекс Директ",
      serviceType: "Digital Advertising",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "19",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-target",
      name: "Таргетированная реклама в Донецке",
      description:
        "Реклама в Facebook, Instagram, VK. Точное попадание в вашу целевую аудиторию",
      serviceType: "Digital Advertising",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "21",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-telegram",
      name: "Разработка Telegram ботов в Донецке",
      description:
        "Создание автоматизированных Telegram ботов для продаж, поддержки и аналитики",
      serviceType: "Software Development",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "12",
      },
    },
    {
      "@type": "Service",
      "@id": "https://tsebulenko-agency.ru#service-yandex",
      name: "Яндекс Директ в Донецке",
      description:
        "Профессиональное управление и оптимизация Яндекс Директ кампаний для максимальной конверсии",
      serviceType: "Digital Advertising",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: {
        "@type": "City",
        name: "Донецк",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "16",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(services),
      }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tsebulenko-agency.ru",
    name: "TSA",
    alternateName: "ТСА, Tsebulenko Agency",
    url: "https://tsebulenko-agency.ru",
    logo: "https://tsebulenko-agency.ru/apple-touch-icon.jpg",
    description:
      "Диджитал-агентство полного цикла в Донецке. Разработка сайтов, SMM, таргет, контекст, Яндекс Директ.",

    founder: {
      "@type": "Person",
      name: "Цыбуленко",
      alternateName: "Tsebulenko",
      jobTitle: "Founder & CEO",
    },

    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+7-949-489-02-40",
      email: "manager@tsebulenko-agency.ru",
      areaServed: "RU",
      availableLanguage: "ru",
    },

    sameAs: [
      "https://www.instagram.com/tsebulenko_agency",
      "https://www.vk.com/tsebulenko_agency",
      "https://t.me/tsebulenko_agency",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* ✨ Явные favicon теги для максимальной совместимости */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="256x256"
          href="/favicon-256x256.ico"
        />

        {/* iOS */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Для Android Chrome */}
        <meta name="theme-color" content="#b65252" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="TSA" />

        {/* Предзагрузка ресурсов */}
        <link rel="preload" href="/favicon.ico" as="image" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.variable}>
        {children}
        <Toaster />

        {/* ✨ Все Schema.org разметки */}
        <LocalBusinessSchema />
        <ServiceSchema />
        <OrganizationSchema />
      </body>
    </html>
  );
}
