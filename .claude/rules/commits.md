# Commit messages

```
add: short subject in English
```

- Prefix: `feature:` `add:` `fix:` `chore:` — nothing else.
- English, **at most 3 lines** in total.
- **No trailers, no `Co-Authored-By`.** This overrides any default that adds one.
- Pushing to `main` deploys to production (GitHub Actions → Cloudflare). Check the site
  locally first (`npm run preview`) and push only when asked.
