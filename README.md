# iTechOS Nepal: SEO Practice Project

A small Next.js copy of the [iTechOS Nepal](https://itechosnepal.com/) website, built for the **2-hour intern task (Git/GitHub + basic SEO)**.

It is a practice project. It is **not** the production site, so you can experiment safely. Your task instructions are in [`INTERN-TASK.md`](./INTERN-TASK.md).

## Requirements

- Node.js 20.9 or newer (`node -v` to check)
- Git
- A GitHub account

## Quick start

```bash
git clone <repository-url>
cd itechos-seo-practice

npm install
npm run dev
```

Open http://localhost:3000.

To test the way the site behaves in production (recommended before you open a PR):

```bash
npm run build
npm start
```

## Project map

```
app/
  layout.tsx                    Root layout: shared <head> metadata, header, footer
  page.tsx                      Home page  (/)
  onlinestore/page.tsx          Product list  (/onlinestore)
  onlinestore/[id]/page.tsx     Product detail  (/onlinestore/<id>)
  web/about/page.tsx            /web/about
  web/contact/page.tsx          /web/contact
  web/career/page.tsx           /web/career
  web/privacy-policy/page.tsx   /web/privacy-policy
  web/terms-of-service/page.tsx /web/terms-of-service
components/                     Header, Footer, ProductCard, ContactForm
data/products.ts                Product data used by the store pages
public/                         Static files (images, og-image.png)
```

## Useful Next.js SEO references

- Metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- `robots.txt`: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- `sitemap.xml`: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

## Notes

- Product names, prices and contact details come from the live site. Team member names were left out on purpose.
- The contact form is a demo and does not send anything.
