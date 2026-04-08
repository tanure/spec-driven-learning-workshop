import DefaultTheme from 'vitepress/theme'
import './style.css'

const key = 'hwp-progress'

const lessonMap = {
  A: ['A1', 'A2', 'A3', 'A4', 'A5'],
  B: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
  C: ['C1', 'C2'],
}

function parsePath(pathname) {
  const m = pathname.match(/\/group([ABC])\/([ABC]\d+)/)
  if (!m) return { group: null, lesson: null }
  return { group: m[1], lesson: m[2] }
}

function load() {
  try {
    return (
      JSON.parse(localStorage.getItem(key)) || {
        completed: [],
      }
    )
  } catch (_) {
    return { completed: [] }
  }
}

function save(state) {
  localStorage.setItem(key, JSON.stringify(state))
}

function markComplete(id) {
  const state = load()
  if (state.completed.includes(id)) return // guard: already done, no recursive loop
  state.completed.push(id)
  save(state)
  renderProgress()
}

function renderProgress() {
  const { group, lesson } = parsePath(window.location.pathname)
  const groupSize = group ? (lessonMap[group] || []).length : 1
  const state = load()
  const currentGroup = lessonMap[group] || []
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
    // only trigger markComplete if not yet recorded — markComplete itself is no-op if already done
    if (allDone && lesson && !state.completed.includes(lesson)) {
      markComplete(lesson)
    }
  }
}

// Register the change listener once at module level — not inside initWorkshop called per route
if (typeof window !== 'undefined') {
  document.addEventListener('change', function (e) {
    if (e.target && e.target.classList.contains('checkpoint-check')) {
      renderProgress()
    }
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // Call DefaultTheme.enhanceApp first to preserve built-in VitePress behaviour
    DefaultTheme.enhanceApp?.(ctx)
    if (typeof window !== 'undefined') {
      ctx.router.onAfterRouteChanged = () => {
        renderProgress()
      }
    }
  },
}

