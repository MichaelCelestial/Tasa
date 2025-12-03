# Digital Studio - Лендинг диджитал-агентства

Современный лендинг для диджитал-студии полного цикла на Next.js 14.

## Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **shadcn/ui** - UI компоненты

## Быстрый старт на Windows

### Требования

- Node.js 18+ (скачать с https://nodejs.org/)

### Установка и запуск

1. Откройте командную строку (cmd) или PowerShell

2. Перейдите в папку проекта:
```bash
cd путь/к/DigitalFuture
```

3. Установите зависимости:
```bash
npm install
```

4. Запустите проект в режиме разработки:
```bash
npm run dev
```

5. Откройте браузер по адресу: http://localhost:5000

### Сборка для продакшена

```bash
npm run build
npm start
```

## Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Корневой layout
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили
├── components/
│   ├── sections/           # Секции лендинга
│   │   ├── Header.tsx      # Шапка сайта
│   │   ├── Hero.tsx        # Главный экран
│   │   ├── Services.tsx    # Услуги
│   │   ├── Process.tsx     # Процесс работы
│   │   ├── Portfolio.tsx   # Портфолио
│   │   ├── Contact.tsx     # Контактная форма
│   │   └── Footer.tsx      # Подвал
│   └── ui/                 # UI компоненты
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── ...
└── lib/
    └── utils.ts            # Утилиты
```

## Секции лендинга

- **Hero** - Главный экран с CTA
- **Services** - 6 услуг агентства (веб-разработка, SMM, контекст и др.)
- **Process** - 4 этапа работы
- **Portfolio** - Примеры проектов
- **Contact** - Форма обратной связи

## Скрипты

- `npm run dev` - Запуск в режиме разработки (порт 5000)
- `npm run build` - Сборка проекта
- `npm start` - Запуск собранного проекта
- `npm run lint` - Проверка кода

## Лицензия

MIT
