import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import Appointment from './models/Appointment.js'
import ServiceRequest from './models/ServiceRequest.js'
import Announcement from './models/Announcement.js'
import classifyIntent from './intentClassifier.js'

dotenv.config({
  path: join(dirname(fileURLToPath(import.meta.url)), '.env'),
})

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio'

app.use(cors())
app.use(express.json())

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✓ MongoDB connected')
    seedAnnouncements()
  })
  .catch((err) => {
    console.warn(
      '⚠ MongoDB unavailable — set MONGODB_URI in server/.env to enable data storage.',
    )
    console.warn(err.message)
  })

async function seedAnnouncements() {
  const count = await Announcement.countDocuments().catch(() => 0)
  if (count > 0) return

  await Announcement.insertMany([
    {
      title: 'Barangay Cleanup Drive',
      body: 'Community cleanup this Saturday, 6:00 AM at the town plaza. Bags and gloves will be provided.',
      category: 'Community',
    },
    {
      title: 'Business Permit Renewal Extended',
      body: 'Renewal of business permits extended until end of the month. Bring complete requirements to the municipal hall.',
      category: 'Permits',
    },
    {
      title: 'New E-Services Portal Launch',
      body: 'Residents may now submit requests and complaints online through the Open Municipality portal.',
      category: 'Announcement',
    },
  ]).catch(() => {})
}

const ok = () => mongoose.connection.readyState === 1

/* ---------- Smart Clinic API ---------- */

app.get('/api/appointments', async (_req, res) => {
  if (!ok()) return res.status(503).json({ error: 'Database not connected' })
  const items = await Appointment.find().sort({ createdAt: -1 }).limit(20)
  res.json(items)
})

app.post('/api/appointments', async (req, res) => {
  if (!ok()) return res.status(503).json({ error: 'Database not connected' })
  const { patientName, contact, department, date, time } = req.body
  if (!patientName || !contact || !department || !date || !time) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  const item = await Appointment.create({
    patientName,
    contact,
    department,
    date,
    time,
  })
  res.status(201).json(item)
})

app.post('/api/assistant', (req, res) => {
  const { message } = req.body
  res.json(classifyIntent(message))
})

/* ---------- Contact form API ---------- */

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  to: process.env.CONTACT_TO || process.env.SMTP_USER,
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' })
  }
  if (!smtpConfig.host || !smtpConfig.user || !smtpConfig.pass) {
    return res.status(503).json({
      error:
        'Email server is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in server/.env',
    })
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.port === 465,
    auth: { user: smtpConfig.user, pass: smtpConfig.pass },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpConfig.user}>`,
      replyTo: `${name} <${email}>`,
      to: smtpConfig.to,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    res.status(201).json({ ok: true })
  } catch (err) {
    console.error('✗ Failed to send email:', err.message)
    res.status(500).json({
      error: 'Failed to send the message. Please email me directly instead.',
    })
  }
})

/* ---------- Open Municipality API ---------- */

app.get('/api/announcements', async (_req, res) => {
  if (!ok()) return res.status(503).json({ error: 'Database not connected' })
  const items = await Announcement.find().sort({ createdAt: -1 }).limit(10)
  res.json(items)
})

app.get('/api/requests', async (_req, res) => {
  if (!ok()) return res.status(503).json({ error: 'Database not connected' })
  const items = await ServiceRequest.find().sort({ createdAt: -1 }).limit(20)
  res.json(items)
})

app.post('/api/requests', async (req, res) => {
  if (!ok()) return res.status(503).json({ error: 'Database not connected' })
  const { name, email, type, details } = req.body
  if (!name || !type || !details) {
    return res.status(400).json({ error: 'Name, type and details are required' })
  }
  const item = await ServiceRequest.create({ name, email, type, details })
  res.status(201).json(item)
})

app.get('/api/health', (_req, res) =>
  res.json({ ok: mongoose.connection.readyState === 1, db: MONGODB_URI }),
)

app.listen(PORT, () => console.log(`✓ API running on http://localhost:${PORT}`))