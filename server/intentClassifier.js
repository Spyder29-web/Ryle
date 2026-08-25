const INTENTS = {
  book: {
    keywords: ['book', 'appoint', 'schedule', 'reserve', 'visit', 'set'],
    reply: (name) =>
      `Great ${name || 'there'}! I can help you book an appointment. Use the booking form above — pick a department, date and time, and your slot will be saved.`,
  },
  reschedule: {
    keywords: ['reschedule', 'move', 'change', 'shift'],
    reply: () =>
      'You can reschedule by booking a new slot on the form. Mention your previous reference in the contact field and our staff will update the old one.',
  },
  cancel: {
    keywords: ['cancel', 'remove', 'delete booking', 'no longer'],
    reply: () =>
      'To cancel an appointment, tell us your name and contact through the form message — our front desk will mark it as cancelled.',
  },
  hours: {
    keywords: ['open', 'time', 'hour', 'when', 'schedule '],
    reply: () =>
      'The clinic is open Monday–Saturday, 8:00 AM to 5:00 PM. Sundays and holidays are closed.',
  },
  location: {
    keywords: ['where', 'location', 'address', 'find', 'map'],
    reply: () =>
      'We are located at the Abra State Institute of Science and Technology Health Center, Bangued, Abra.',
  },
  hello: {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
    reply: (name) => `Hello ${name || 'there'}! 👋 How can I assist you today?`,
  },
  thanks: {
    keywords: ['thank', 'thanks', 'appreciate'],
    reply: () => 'You are welcome! Anything else I can help you with?',
  },
}

export default function classifyIntent(input = '') {
  const text = ` ${input.toLowerCase()} `

  let best = { name: 'fallback', score: 0 }
  for (const [name, intent] of Object.entries(INTENTS)) {
    let score = 0
    for (const kw of intent.keywords) {
      if (text.includes(kw)) score += kw.split(' ').length
    }
    if (score > best.score) best = { name, score }
  }

  if (best.score === 0) {
    return {
      intent: 'fallback',
      confidence: 0,
      reply:
        "I'm not sure about that one. Try asking about booking, rescheduling, cancelling, clinic hours, or our location.",
    }
  }

  return {
    intent: best.name,
    confidence: Math.min(0.99, 0.5 + best.score * 0.16),
    reply: INTENTS[best.name].reply(),
  }
}