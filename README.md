# 🚀 Hackathon Learning Workshop

> A 90-minute step-by-step learning journey for developers attending the hackathon.

🌐 **Live site:** [tanure.github.io/spec-driven-learning-workshop](https://tanure.github.io/spec-driven-learning-workshop/)

---

## 🎯 What You'll Learn

- 🤖 How GitHub Copilot instructions, agents, and skills work
- 📐 Spec-driven development vs vibe coding
- 🛠️ How to use spec-kit to turn specs into GitHub Issues and implementation

---

## 📚 Topics

| Module | Title | Duration |
|--------|-------|----------|
| 📌 M1 | The AI Development Problem | ~10 min |
| 💡 M2 | Copilot Best Practices | ~25 min |
| 📝 M3 | Spec-Driven Development | ~45 min |
| 🔗 M4 | GitHub MCP Integration | ~20 min |
| 🏁 M5 | Putting It All Together | ~30 min |

---

## 🚢 Deploy

Pushes to `main` touching `docs/` trigger GitHub Actions deployment to Pages.

To deploy to a GitHub Pages subpath (e.g., `https://org.github.io/repo-name/`), set the `BASE_URL` environment variable before building:

```bash
# In your GitHub Actions workflow or locally:
BASE_URL=/repo-name/ npx vitepress build
```

For root-path deployment (`https://org.github.io/` or a custom domain), leave `BASE_URL` unset.

---

## 📦 Publish As Separate Repository

Create this folder as its own repository and have participants use any blank workspace or their hackathon project folder. The spec-kit workflow creates `specs/` and `memory/` directories automatically when participants run `specify init`.

---

## 💻 Local Preview

```bash
cd docs
npm install
npm run docs:dev
```

The dev server starts at `http://localhost:5173/` by default.

---

## 🤝 Contributing

Found an issue or want to improve the workshop content? Feel free to open an issue or submit a pull request!

---

<p align="center">Made with ❤️ for hackathon participants</p>
