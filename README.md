# Juan Martín Pal website

This is a Hugo site published at [juanpal.com](https://juanpal.com/). The current design is implemented in `layouts/` and `static/assets/style.css`.

## Edit and publish

1. Edit the source files listed below.
2. Run `hugo` from the project root. It builds the site into `docs/`.
3. Commit and push both the source changes and the generated `docs/` changes. GitHub Pages serves `docs/`.

Use `hugo server` to preview edits locally.

## Where to edit

- Home biography, CV link, portrait details: `content/_index.md`
- News: `data/news.toml`
- Research heading: `content/research/_index.md`
- Each working paper, project, or older work item: one Markdown file in `content/research/`
- Teaching heading: `content/teaching/_index.md`
- Schools and courses: `data/teaching.toml`
- Social links and site settings: `hugo.toml`
- PDFs, portrait, favicons, and other downloadable files: `static/`

To add a working paper, create a Markdown file in `content/research/` with front matter like this, followed by the abstract as ordinary Markdown:

```toml
+++
title = "Paper title"
research_type = "working-paper"
weight = 13
paper_url = "/files/paper.pdf"
updated = "September 2026"
coauthors = [{ name = "Coauthor Name", url = "https://example.com/" }]
+++

Abstract text goes here.
```

Use `research_type = "work-in-progress"` for a project or `"older-work"` for an older paper. A larger `weight` places the item later within its group. Put a PDF in `static/files/` and link to it with `/files/filename.pdf`.

The previous Hugo version is archived in the Git branch `archive/pre-redesign-2026-09-26`, the tag `pre-redesign-2026-09-26`, and `../juanpal-website-archived-2026-09-26/`.
