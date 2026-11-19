# Shengke Consulting Website

Корпоративный сайт ТОО «Shengke Consulting» — казахстанского партнёра Shengke Law Firm.

## Стек

- Next.js (App Router) + TypeScript
- Tailwind CSS
- 4 языка: RU / EN / 中文 / KZ
- API-формы заявок и записи на консультацию

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — редирект на `/ru`.

## Страницы

- `/[locale]` — главная
- `/[locale]/about` — о компании
- `/[locale]/services` и `/[locale]/services/[slug]` — услуги
- `/[locale]/cases` — кейсы
- `/[locale]/team` — команда
- `/[locale]/contact` — контакты и заявка
- `/[locale]/consultation` — запись на консультацию

## Дизайн

Цвета из брифа: `#133269`, `#2F5BD3`, `#EEF2F9`, золотой акцент `#C9A227`.

## Заявки

Формы принимают заявки через `/api/contact` и `/api/consultation` и сохраняют их в памяти процесса (с логом в runtime). Для продакшена можно подключить почту/CRM через переменные окружения.
