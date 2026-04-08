# Hackathon Learning Workshop

A 90-minute step-by-step learning journey for developers attending the hackathon.

## What You'll Learn
- How GitHub Copilot instructions, agents, and skills work
- Spec-driven development vs vibing coding
- How to use spec-kit to turn specs into GitHub Issues and implementation

## Topics

| Group | Topic | Duration |
|---|---|---|
| A | Copilot Foundation | ~30 min |
| B | Spec-Driven Development | ~35 min |
| C | Integration + Use Cases | ~10 min |

## Deploy
Pushes to `main` touching `docs/` trigger GitHub Actions deployment to Pages.

## Publish As Separate Repository
Create this folder as its own repository, for example:
- `hackathon-learning-workshop`

Then set the paired starter repository URL in workshop content:
- `https://github.com/YOUR-ORG/spec-driven-learning-template`

## Local Preview
```bash
cd docs
gem install bundler
bundle install
bundle exec jekyll serve
```
