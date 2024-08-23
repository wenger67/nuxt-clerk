import pg from 'pg'

let globalPool: pg.Pool
export function getDb() {
  if (!globalPool) {
    const connectionString: string = process.env.POSTGRES_URL || ''
    globalPool = new pg.Pool({
      connectionString
    })
  }

  return globalPool
}
