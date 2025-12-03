import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

// ✅ Отдельный viewport export
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

// ✅ Metadata БЕЗ viewport полей
export const metadata: Metadata = {
  title: "TSA (ТСА) | Диджитал Агентство Донецк | Сайты, SMM, Контекст, Таргет",

  description:
    "Комплексные диджитал услуги в Донецке от агентства ТСА: разработка сайтов, SMM, контекстная реклама, таргет, Яндекс Директ. Основатель Цыбуленко (Tsebulenko).",

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

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tsebulenko-agency.ru",
    title: "TSA (ТСА) | Диджитал Агентство Донецк",
    description: "Сайты, SMM, контекст, таргет, директ — всё в одном месте",
    siteName: "TSA",
    images: [
      {
        url: "https://tsebulenko-agency.ru/logo.jpg",
        width: 1200,
        height: 630,
        alt: "TSA - Диджитал Агентство Донецк",
        type: "image/jpeg",
      },
    ],
  },

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  alternates: {
    canonical: "https://tsebulenko-agency.ru",
  },

  formatDetection: {
    telephone: false,
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: "/public/favicon.ico",
    shortcut: "/public/favicon.ico",
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tsebulenko-agency.ru",
    name: "TSA | ТСА - Диджитал Агентство Донецк",
    image: "https://tsebulenko-agency.ru/logo.jpg",

    founder: {
      "@type": "Person",
      name: "Цыбуленко",
      alternateName: "Tsebulenko",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Ваш адрес в Донецке",
      addressLocality: "Донецк",
      addressRegion: "Донецкая область",
      postalCode: "83000",
      addressCountry: "RU",
    },

    telephone: "+7-949-489-02-40",
    email: "tsebulenko-agency.ru@gmail.com",
    url: "https://tsebulenko-agency.ru",

    sameAs: [
      "https://www.instagram.com/tsebulenko_agency",
      "https://www.vk.com/@tsebulenko_agency",
      "https://t.me/tsebulenko_agency",
    ],

    areaServed: {
      "@type": "City",
      name: "Донецк",
    },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },

    priceRange: "$$",
    description:
      "Комплексные диджитал решения для продвижения бизнеса в Донецке",
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
      name: "Дизайн сайтов в Донецке",
      description: "Профессиональный веб-дизайн и UX/UI для вашего бизнеса",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
    {
      "@type": "Service",
      name: "Создание сайтов в Донецке",
      description: "Разработка современных сайтов на Next.js для бизнеса",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
    {
      "@type": "Service",
      name: "SMM в Донецке",
      description: "Управление социальными сетями и контентом для бизнеса",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
    {
      "@type": "Service",
      name: "Контекстная реклама в Донецке",
      description:
        "Запуск и оптимизация контекстных кампаний в Google и Яндекс",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
    {
      "@type": "Service",
      name: "Таргетированная реклама в Донецке",
      description: "Facebook, Instagram, VK таргет для вашего бизнеса",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
    {
      "@type": "Service",
      name: "Яндекс Директ в Донецке",
      description: "Профессиональное управление Яндекс Директ кампаниями",
      provider: {
        "@type": "LocalBusiness",
        name: "TSA | ТСА - Диджитал-Агентство полного цикла",
        url: "https://tsebulenko-agency.ru",
      },
      areaServed: "Донецк",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TSA",
    alternateName: "ТСА",
    url: "https://tsebulenko-agency.ru",
    logo: "https://tsebulenko-agency.ru/logo.jpg",
    description: "Диджитал агентство в Донецке",
    founder: {
      "@type": "Person",
      name: "Цыбуленко",
      alternateName: "Tsebulenko",
    },
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+7-949-489-02-40",
      email: "tsebulenko-agency.ru@gmail.com",
      areaServed: "RU",
      availableLanguage: "ru",
    },
    sameAs: [
      "https://www.instagram.com/tsebulenko_agency",
      "https://www.vk.com/@tsebulenko_agency",
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
    <html lang="ru">
      <head>
        <LocalBusinessSchema />
        <ServiceSchema />
        <OrganizationSchema />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Yandex Verification */}
        <meta name="yandex-verification" content="YOUR_YANDEX_CODE" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
