import Axios from 'axios'
import { DB_SERVER } from './env'

const dbServer = Axios.create({
  baseURL: DB_SERVER,
})

export { dbServer }
