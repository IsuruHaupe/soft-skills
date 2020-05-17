import path from 'path'
import dotenvSafe from 'dotenv-safe'

// Load environment configuration
dotenvSafe.config({
  path: path.resolve(__dirname, '..', '.env'),
  example: path.resolve(__dirname, '..', '.env.example')
})

const env = process.env as { [key: string]: string }

export const { MONGO_URI, JWT_SECRET } = env
export const SERVER_PORT = parseInt(env.SERVER_PORT, 10)