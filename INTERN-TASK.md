# 2-Hour Intern Task: Git/GitHub + Basic SEO

**Project:** iTechOS Nepal practice site (this repository)
**Live site for reference:** https://itechosnepal.com/
**Duration:** 2 hours

---

## Objective

Learn the basic Git/GitHub workflow, then audit this practice website for basic on-page SEO problems and fix a few of them.

---

## Part 1: Git & GitHub Basics (45 minutes)

### Topics to learn and practice

- Git vs GitHub
- Cloning a repository
- Creating a new branch
- Checking repository status
- Adding and committing changes
- Pushing a branch to GitHub
- Creating a Pull Request
- `main` vs feature branches
- Pulling the latest changes from the remote repository

### Expected workflow

```bash
git clone <repository-url>
cd itechos-seo-practice

git checkout -b seo-improvements

git status
git add .
git commit -m "Improve basic SEO"

git push -u origin seo-improvements
```

> **Important:** Open a Pull Request on GitHub. Do **not** push directly to `main`.

Tips:

- Run `git status` often. It tells you what changed and what branch you are on.
- Make small commits with clear messages, for example `Add robots.txt` rather than `changes`.
- Before starting new work, run `git pull` on `main` to get the latest changes.

---

## Part 2: Basic SEO Project (1 hour 15 minutes)

Run the site locally (see `README.md`) and analyze the **homepage** and other pages for basic on-page SEO problems.

### Task 1: Check the homepage

| Item | What to check |
|---|---|
| Page title | Present, unique, descriptive |
| Meta description | Present, clear, roughly 120-160 characters |
| H1 heading | Exactly one, relevant to the page |
| H2/H3 structure | Logical hierarchy with no skipped levels |
| Image alt attributes | Present and descriptive |
| URL structure | Clean and readable |
| Internal links | Working, with meaningful link text |

Then repeat the quick checks (title, description, headings) on **at least two other pages**, for example `/web/about` and a product page.

### Task 2: Check whether the website has

- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Canonical URL
- [ ] Open Graph metadata (check that the values are actually correct, not just present)

### Task 3: Identify improvements

Identify **at least 5** SEO improvements and write them down as you find them.

### Task 4: Implement improvements

Implement **2-3 simple improvements** in the project.

### Task 5: Verify

Run `npm run build` and `npm start`. Click through the pages and confirm nothing is broken.

### How to inspect a page

- **View source:** right-click the page, then "View Page Source" (or press `Ctrl+U`). Search for `<title>`, `description`, `canonical` and `og:`.
- **DevTools > Elements:** inspect headings and `<img>` tags.
- **Terminal:**
  ```bash
  curl -s http://localhost:3000/ | grep -oE '<title>[^<]*</title>|<meta[^>]*>|<link rel="canonical"[^>]*>'
  ```
- **Lighthouse:** Chrome DevTools > Lighthouse > SEO. It is a good hint list, but not the full picture.
- Open `/robots.txt` and `/sitemap.xml` directly in the browser.

---

## SEO Report

Create a file named **`SEO-AUDIT.md`** in the project root using this structure:

```markdown
# iTechOS Nepal Basic SEO Audit

## Issues Found

1. ...
2. ...
3. ...
4. ...
5. ...

## Changes Implemented

1. ...
2. ...
3. ...

## Recommendations

1. ...
2. ...
3. ...
```

For each issue, say **what** is wrong, **where** it is (page or file) and **why** it matters.

---

## Final Deliverables

By the end of 2 hours, submit:

- [ ] GitHub feature branch
- [ ] Pull Request
- [ ] `SEO-AUDIT.md`
- [ ] 2-3 implemented SEO improvements
- [ ] Short summary of what you learned (3-5 sentences, in the Pull Request description)

---

## Suggested Time Plan

| Time | Activity |
|---|---|
| 0:00 - 0:45 | Part 1: Git & GitHub basics, clone and run the project |
| 0:45 - 1:15 | Homepage and site audit (Task 1 and Task 2) |
| 1:15 - 1:45 | Implement 2-3 improvements and test |
| 1:45 - 2:00 | Write `SEO-AUDIT.md`, open the PR, write the learning summary |
