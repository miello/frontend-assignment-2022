import dotenv from 'dotenv'

dotenv.config()

const DB_SERVER = process.env.DB_SERVER
const API_PORT = process.env.API_PORT

export { DB_SERVER, API_PORT }
