async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Request failed')
  return data
}

export const api = {
  appointments: {
    list: () => request('/appointments'),
    create: (body) =>
      request('/appointments', { method: 'POST', body: JSON.stringify(body) }),
  },
  assistant: (message) =>
    request('/assistant', { method: 'POST', body: JSON.stringify({ message }) }),
  announcements: {
    list: () => request('/announcements'),
  },
  requests: {
    list: () => request('/requests'),
    create: (body) =>
      request('/requests', { method: 'POST', body: JSON.stringify(body) }),
  },
  health: () => request('/health'),
  contact: ({ name, email, message }) =>
    request('/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    }),
}

export function formatDate(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function timeAgo(iso) {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}