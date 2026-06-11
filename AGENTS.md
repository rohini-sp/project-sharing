# AGENTS.md — operating contract

This is a **shared** project. Other workspaces have this same repo cloned and are
editing it at the same time. Their pushes appear in your clone automatically (the commit
relay fetches them); you don't need to pull manually.

## Working rules — every task
1. Work only inside this project folder.
2. Read current state first: `README.md`, `OBJECTIVES.md`, `content/copy.md`, `index.html`,
   `styles.css`, and `sections/`.
3. Build your section as a partial in `sections/`, add its styles to `styles.css`, and wire
   it into `index.html` between the matching `<!-- X:START --> / <!-- X:END -->` markers.
4. Sanity-check it renders (open `index.html`, or `python -m http.server`).
5. Commit + push, one logical change per commit:
   `git add -A && git commit -m "<who>: <what>" && git push`
6. If a push is rejected (someone pushed first), integrate and retry:
   `git pull --rebase`, re-check it renders, `git push`.

## Shared files (expect to reconcile)
- `index.html` and `styles.css` are edited by everyone — keep your edits within your
  section's markers / clearly-labeled style block to minimize collisions.
- Capture brand/messaging you discover in `content/copy.md` so others can reuse it.
