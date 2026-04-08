import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hackathon Learning Workshop',
  description:
    'A 90-minute journey through Copilot instructions, agents, skills, and spec-driven development.',
  base: process.env.BASE_URL || '/',

  themeConfig: {
    siteTitle: 'Hackathon Workshop',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Group A', link: '/groupA/' },
      { text: 'Group B', link: '/groupB/' },
      { text: 'Group C', link: '/groupC/' },
      { text: 'Cheatsheet', link: '/resources/cheatsheet' },
      { text: 'FAQ', link: '/resources/faq' },
    ],

    sidebar: {
      '/groupA/': [
        {
          text: 'Group A: Copilot Foundation',
          items: [
            { text: 'Overview', link: '/groupA/' },
            { text: 'A1: The Vibing Trap', link: '/groupA/A1-vibing' },
            { text: 'A2: Meet .instructions.md', link: '/groupA/A2-instructions' },
            { text: 'A3: Copilot Actually Listens', link: '/groupA/A3-respects' },
            { text: 'A4: Custom Copilot Agents', link: '/groupA/A4-agents' },
            { text: 'A5: AI Skills - Repeatable Workflows', link: '/groupA/A5-skills' },
          ],
        },
      ],
      '/groupB/': [
        {
          text: 'Group B: Spec-Driven Development',
          items: [
            { text: 'Overview', link: '/groupB/' },
            { text: 'B1: Coding Without a Map', link: '/groupB/B1-without-specs' },
            { text: 'B2: Writing Real Specifications', link: '/groupB/B2-writing-specs' },
            { text: 'B3: The Full Spec-Kit Journey', link: '/groupB/B3-speckit-flow' },
            { text: 'B4: Skills That Make Specs Smarter', link: '/groupB/B4-skills-specs' },
            { text: 'B5: From Spec to Working Code', link: '/groupB/B5-from-specs-to-code' },
            { text: 'B6: The Big Comparison', link: '/groupB/B6-comparison' },
          ],
        },
      ],
      '/groupC/': [
        {
          text: 'Group C: Integration & Use Cases',
          items: [
            { text: 'Overview', link: '/groupC/' },
            { text: 'C1: The Complete Workflow', link: '/groupC/C1-together' },
            { text: 'C2: Use Cases and High-Level Plans', link: '/groupC/C2-use-cases' },
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
      message: 'Hackathon Learning Workshop — spec-driven development with GitHub Copilot',
    },

    search: {
      provider: 'local',
    },
  },
})
