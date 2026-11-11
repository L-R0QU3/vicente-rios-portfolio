import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import type { HealthResponse } from '@vicente-rios/shared'

const app = express()

const PORT = Number(process.env.PORT ?? 4000)
const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173'
const NODE_ENV = process.env.NODE_ENV ?? 'development'
const API_VERSION = '0.1.0'

app.use(cors({ origin: FRONTEND_URL, credentials: true }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  const payload: HealthResponse = {
    status: 'ok',
    service: 'vicente-rios-api',
    version: API_VERSION,
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  }
  res.status(200).json(payload)
})

app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`[api] http://localhost:${PORT}`)
  console.log(`[api] environment: ${NODE_ENV}`)
  console.log(`[api] cors origin: ${FRONTEND_URL}`)
  console.log(`[api] health:     GET /api/health`)
})

export { app }