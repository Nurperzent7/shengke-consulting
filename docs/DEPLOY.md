# Деплой и инфраструктура Shengke Consulting

## 1. GitHub

- Репозиторий: https://github.com/Nurperzent7/shengke-consulting
- Ветка: `main`
- Весь исходный код сайта (Next.js) лежит здесь

```bash
git clone https://github.com/Nurperzent7/shengke-consulting.git
cd shengke-consulting
npm install
npm run build
```

## 2. Vercel

- Team / scope: `nu-rka-s-projects` (NUrka's projects, Hobby)
- Project ID: `prj_v7xGAtOXMl22Z1S0aPynaPCfLj7y`
- Project name: `shengke-consulting`
- Framework: Next.js
- Git: `Nurperzent7/shengke-consulting` → auto deploy from `main`

### Domains

| Domain | Notes |
|--------|--------|
| `shengkeconsulting.kz` | Production apex |
| `www.shengkeconsulting.kz` | 301 → apex |
| `shengke-consulting.vercel.app` | Default Vercel URL |

Dashboard: https://vercel.com/nu-rka-s-projects/shengke-consulting

## 3. Hoster.kz DNS

Domain: `shengkeconsulting.kz` (активен)

Nameservers (не менять):
- `ns1.hoster.kz`
- `ns2.hoster.kz`
- `ns3.hoster.kz`

### Site records (Vercel)

```
A     @      216.198.79.1
A     @      64.29.17.1
A     www    216.198.79.1
A     www    64.29.17.1
```

Альтернатива для www (если CNAME разрешён):

```
CNAME  www   bea68ce3d5c71880.vercel-dns-017.com.
```

### Mail records (оставить)

```
A     mail   89.35.125.9
MX    @      mail.shengkeconsulting.kz.  (priority 10)
TXT   @      v=spf1 +a +mx include:_spf.hoster.kz ~all
```

Панель: https://hoster.kz/cabinet/domain/shengkeconsulting.kz/records/

## 4. Языки

Код: `src/lib/constants.ts`

```ts
export const defaultLocale: Locale = "kk"; // казахский по умолчанию
export const locales = ["ru", "en", "zh", "kk"];
```

Корневой URL `/` редиректит на `/kk`.

Переводы: `src/messages/{kk,ru,en,zh}.ts`

## 5. Обновление сайта

1. Внесите правки в код
2. `git add` → `git commit` → `git push` в GitHub `main`
3. Vercel сам соберёт production
4. При необходимости жёстко обновите браузер (Ctrl+F5) из‑за кэша favicon/CDN

## 6. Cursor / Origin

- Origin repo: `lazzat/shengke-consulting`
- Cursor published app: https://shengke-consulting.apps.grok.bot  
  (использовался на этапе разработки; основной прод — Vercel + домен)

## 7. Checklist после изменений DNS

```bash
# DNS
dig +short A shengkeconsulting.kz
dig +short A www.shengkeconsulting.kz

# HTTPS
curl -sI https://shengkeconsulting.kz      # ожидается Location: /kk
curl -sI https://www.shengkeconsulting.kz  # ожидается редирект на apex
```

## 8. Контакты для форм / CTA

См. `src/lib/constants.ts` → объект `contacts`.
