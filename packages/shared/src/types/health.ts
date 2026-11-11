export interface HealthResponse {
  status: 'ok' | 'error'
  service: string
  version: string
  environment: string
  timestamp: string
}