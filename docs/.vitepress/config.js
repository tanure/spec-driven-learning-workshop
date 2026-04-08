import { defineConfig } from 'vitepress'
import markdownItContainer from 'markdown-it-container'

function normalizeBaseUrl(baseUrl) {
  const normalized = `/${(baseUrl || '/').replace(/^\/+|\/+$/g, '')}/`.replace(/\/{2,}/g, '/')
  return normalized === '//' ? '/' : normalized
}

export default defineConfig({
  title: 'Spec-Driven Development Workshop',
  description:
    'A structured workshop that replaces vibe coding with a repeatable spec-driven development workflow using GitHub Copilot.',
  base: normalizeBaseUrl(process.env.BASE_URL),

  markdown: {
    config: (md) => {
      md.use(markdownItContainer, 'bad-practice', {
        render(tokens, idx) {
          return tokens[idx].nesting === 1 ? '<div class="bad-practice">\n' : '</div>\n'
        },
      })
      md.use(markdownItContainer, 'best-practice', {
        render(tokens, idx) {
          return tokens[idx].nesting === 1 ? '<div class="best-practice">\n' : '</div>\n'
        },
      })
    },
  },

  themeConfig: {
    siteTitle: 'Spec-Driven Workshop',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'M1', link: '/module1/' },
      { text: 'M2', link: '/module2/' },
      { text: 'M3', link: '/module3/' },
      { text: 'M4', link: '/module4/' },
      { text: 'M5', link: '/module5/' },
      { text: 'Resources', link: '/resources/cheatsheet' },
    ],

    sidebar: {
      '/module1/': [
        {
          text: 'M1: The AI Development Problem',
          items: [
            { text: 'Module Overview', link: '/module1/' },
            { text: 'L1.1: The Vibing Trap', link: '/module1/L1-1-vibing' },
            { text: 'L1.2: The Three Pillars', link: '/module1/L1-2-three-pillars' },
          ],
        },
      ],
      '/module2/': [
        {
          text: 'M2: Copilot Best Practices',
          items: [
            { text: 'Module Overview', link: '/module2/' },
            { text: 'L2.1: Instructions That Actually Work', link: '/module2/L2-1-instructions' },
            { text: 'L2.2: Agents and Decision Patterns', link: '/module2/L2-2-agents' },
            { text: 'L2.4: Plan Mode vs. Agent Mode', link: '/module2/L2-4-plan-vs-agent' },
          ],
        },
      ],
      '/module3/': [
        {
          text: 'M3: Spec-Driven Development',
          items: [
            { text: 'Module Overview', link: '/module3/' },
            { text: 'L3.1: The Cost of No Specs', link: '/module3/L3-1-cost-no-specs' },
            { text: 'L3.2: Writing Specs That Guide AI', link: '/module3/L3-2-writing-specs' },
            { text: 'L3.3: The Spec-Kit Workflow', link: '/module3/L3-3-speckit-workflow' },
            { text: 'L3.4: Clarification Before Code', link: '/module3/L3-4-clarification' },
            { text: 'L3.5: From Specs to Code', link: '/module3/L3-5-spec-to-code' },
          ],
        },
      ],
      '/module4/': [
        {
          text: 'M4: GitHub MCP Integration',
          items: [
            { text: 'Module Overview', link: '/module4/' },
            { text: 'L4.1: What Is MCP and Why It Matters', link: '/module4/L4-1-what-is-mcp' },
            { text: 'L4.2: The Write-Read Loop', link: '/module4/L4-2-write-read-loop' },
          ],
        },
      ],
      '/module5/': [
        {
          text: 'M5: Putting It All Together',
          items: [
            { text: 'Module Overview', link: '/module5/' },
            { text: 'L5.1: The Full Spec-Driven Simulation', link: '/module5/L5-1-full-workflow' },
            { text: 'L5.2: Real-World Use Cases', link: '/module5/L5-2-use-cases' },
            { text: 'L5.3: Progressive Automation', link: '/module5/L5-3-automation' },
          ],
        },
      ],
      '/resources/': [
        {
          text: 'Resources',
          items: [
            { text: 'Quick Reference Cheatsheet', link: '/resources/cheatsheet' },
            { text: 'FAQ and Troubleshooting', link: '/resources/faq' },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tanure/spec-driven-learning-workshop',
      },
    ],

    footer: {
      message: 'Spec-Driven Development Workshop — structured AI development with GitHub Copilot',
    },

    search: {
      provider: 'local',
    },
  },
})
