import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        initWorkshop()
      }
    }
  },
  setup() {
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => initWorkshop())
    }
  },
}

function initWorkshop() {
  if (typeof window === 'undefined') return

  const key = 'hwp-progress'
  const body = document.body
  const lesson = body && body.dataset && body.dataset.lesson
  const group = body && body.dataset && body.dataset.group
  const groupSize = parseInt((body && body.dataset && body.dataset.groupSize) || '1', 10)

  const map = {
    A: ['A1', 'A2', 'A3', 'A4', 'A5'],
    B: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
    C: ['C1', 'C2'],
  }

  function load() {
    try {
      return (
        JSON.parse(localStorage.getItem(key)) || {
          completed: [],
          groupADone: false,
          groupBDone: false,
        }
      )
    } catch (_) {
      return { completed: [], groupADone: false, groupBDone: false }
    }
  }

  function save(state) {
    localStorage.setItem(key, JSON.stringify(state))
  }

  function markComplete(id) {
    const state = load()
    if (!state.completed.includes(id)) state.completed.push(id)
    state.groupADone = map.A.every((x) => state.completed.includes(x))
    state.groupBDone = map.B.every((x) => state.completed.includes(x))
    save(state)
    render()
  }

  function render() {
    const state = load()
    const currentGroup = map[group] || []
    const doneInGroup = currentGroup.filter((x) => state.completed.includes(x)).length

    const fill = document.getElementById('progress-fill')
    const text = document.getElementById('progress-text')
    if (fill) fill.style.width = `${Math.round((doneInGroup / groupSize) * 100)}%`
    if (text) text.textContent = `${doneInGroup} / ${groupSize} lessons`

    const checks = Array.from(document.querySelectorAll('.checkpoint-check'))
    const next = document.getElementById('next-btn')
    if (next && checks.length > 0) {
      const allDone = checks.every((c) => c.checked)
      next.setAttribute('aria-disabled', allDone ? 'false' : 'true')
      if (allDone && lesson) markComplete(lesson)
    }
  }

  document.addEventListener('change', function (e) {
    if (e.target && e.target.classList.contains('checkpoint-check')) {
      render()
    }
  })

  render()
  window.workshopProgress = { markComplete }
}
