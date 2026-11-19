# Shengke Consulting Website

Корпоративный сайт **ТОО «Shengke Consulting»** — казахстанский партнёр Shengke Law Firm (升科律师事务所, КНР).

## Живые адреса

| Среда | URL |
|-------|-----|
| Продакшен (домен) | https://shengkeconsulting.kz |
| www | https://www.shengkeconsulting.kz → редирект на основной |
| Vercel | https://shengke-consulting.vercel.app |
| Cursor app (архив) | https://shengke-consulting.apps.grok.bot |

Язык по умолчанию: **казахский (KK)**. Также: RU / EN / 中文.

## Репозитории

- GitHub: https://github.com/Nurperzent7/shengke-consulting
- Origin (Cursor): https://cursor.com/codebase/lazzat/shengke-consulting

## Стек

- Next.js (App Router) + TypeScript
- Tailwind CSS
- 4 языка: `kk` / `ru` / `en` / `zh`
- Формы заявок и записи на консультацию (`/api/contact`, `/api/consultation`)
- WhatsApp / WeChat CTA

## Запуск локально

```bash
npm install
npm run dev
```

Откроется редирект на `/kk`.

```bash
npm run build
npm start
```

## Структура страниц

- `/[locale]` — главная
- `/[locale]/about` — о компании
- `/[locale]/services` и `/[locale]/services/[slug]` — услуги
- `/[locale]/cases` — кейсы
- `/[locale]/team` — команда
- `/[locale]/contact` — контакты и заявка
- `/[locale]/consultation` — запись на консультацию

## Дизайн (бренд)

| Роль | Цвет |
|------|------|
| Основной | `#133269` |
| Акцент | `#2F5BD3` |
| Фон | `#EEF2F9` |
| Золото | `#C9A227` |

Favicon: синий квадрат с буквой **S** и золотой полоской.

## Деплой (Vercel)

1. Проект Vercel: `shengke-consulting` (команда NUrka's projects)
2. GitHub connected: `Nurperzent7/shengke-consulting`
3. Framework: Next.js
4. Production branch: `main`
5. После `git push` на `main` Vercel собирает production автоматически (или Create Deployment)

### Домены в Vercel

- `shengkeconsulting.kz`
- `www.shengkeconsulting.kz` → редирект 301 на apex

## DNS (Hoster.kz)

Домен зарегистрирован на **hoster.kz**, NS: `ns1/ns2/ns3.hoster.kz`.

Актуальные записи для сайта:

| Тип | Имя | Значение | Назначение |
|-----|-----|----------|------------|
| A | `@` | `216.198.79.1` | Корень → Vercel |
| A | `@` | `64.29.17.1` | Корень → Vercel (резерв, рекомендуется) |
| A | `www` | `216.198.79.1` | www → Vercel |
| A | `www` | `64.29.17.1` | www → Vercel |
| A | `mail` | `89.35.125.9` | Почта Hoster — **не менять** |
| MX | `@` | `mail.shengkeconsulting.kz` | Почта — **не менять** |
| TXT | `@` | SPF hoster | Почта — **не менять** |

Кабинет DNS: https://hoster.kz/cabinet/domain/shengkeconsulting.kz/records/

## Контакты компании (с брифа)

- Адрес: г. Астана, район Есиль, ул. Сарайшык, д. 9, ВП-15
- Алихан Сеитов: +7 778 308 5560 (WhatsApp)
- Налоги / бухгалтерия: +7 747 212 6280 (WeChat)
- Ло Чанци: +86 180 8083 8700 / +7 707 202 4876
- Email (сайт): info@shengke.kz
- 2ГИС: https://2gis.kz/astana/geo/70000001119344388

## Формы

`/api/contact` и `/api/consultation` принимают заявки и пишут их в runtime-лог / память процесса.  
Для продакшена рекомендуется подключить почту или CRM.

## Полезные команды

```bash
# пуш в GitHub
git push origin main   # если origin = GitHub
# или
git push github main

# проверка домена
curl -sI https://shengkeconsulting.kz
```

## История настройки (кратко)

1. Сайт собран по брифу RU/ZH/EN/KZ
2. Опубликован на Cursor Apps, затем перенесён на Vercel + GitHub
3. Домен `shengkeconsulting.kz` привязан через DNS Hoster → Vercel
4. Favicon заменён на бренд Shengke
5. Язык по умолчанию установлен на казахский (`kk`)
