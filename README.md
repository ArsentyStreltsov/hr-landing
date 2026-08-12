# hr-promo

Прототип B2B-лендинга платформы для HR-активаций и корпоративных digital-событий.

## Live

https://arsentystreltsov.github.io/hr-landing/

## Стек

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Recharts

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Структура

- `src/data/` — тексты, цифры, кейсы и конфиги (легко заменить)
- `src/components/sections/` — блоки лендинга
- `src/components/games/` — кликабельные демо-игры
- `src/components/layout/` — header, footer, modal

Бренд пока тестовый: **hr-promo**. Чтобы переименовать, начните с `src/data/brand.ts`.

## Деплой

При пуше в `main` GitHub Actions собирает проект и публикует на GitHub Pages.
