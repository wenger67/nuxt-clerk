import type { QueryResultRow } from 'pg'
import type { User } from './user'
export interface Task {
  id?: number
  user_email: string
  img_description: string
  img_size: string
  img_url: string
  llm_name: string
  llm_params?: any
  created_at: string
  created_user?: User
  uuid: string
  status: number
}

export async function insertTask(task: Task) {
  const db = getDb()
  const res = await db.query(
    `INSERT INTO tasks 
        (user_email, img_description, img_size, img_url, llm_name, llm_params, created_at, uuid, status)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [
      task.user_email,
      task.img_description,
      task.img_size,
      task.img_url,
      task.llm_name,
      task.llm_params,
      task.created_at,
      task.uuid,
      task.status
    ]
  )
  return res
}

export async function getUserGenCount(email: string): Promise<number> {
  const db = getDb()
  const res = await db.query(
    `SELECT COUNT(*) FROM tasks WHERE user_email = $1`,
    [email]
  )
  if (res.rowCount === 0) {
    return 0
  }

  const { rows } = res
  const row = rows[0]
  return row.count
}

export async function getUserTasksCount(email: string): Promise<number> {
  const db = getDb()
  const res = await db.query(`SELECT * FROM tasks WHERE user_email = $1`, [
    email
  ])
  if (res.rowCount === 0) {
    return 0
  }
  const { rows } = res
  const row = rows[0]
  return row.count
}

export async function findTaskById(id: number): Promise<Task | undefined> {
  const db = getDb()
  const res = await db.query(
    `SELECT t.*, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar FROM tasks as t LEFT JOIN users as u on t.user_email = user_email WHERE t.id = $1`,
    [id]
  )
  if (res.rowCount === 0) return undefined

  const task = formatTask(res.rows[0])
  return task
}

export function formatTask(row: QueryResultRow): Task | undefined {
  let task: Task = {
    id: row.id,
    user_email: row.user_email,
    img_description: row.img_description,
    img_size: row.img_size,
    img_url: row.img_url,
    llm_name: row.llm_name,
    llm_params: row.llm_params,
    created_at: row.created_at,
    uuid: row.uuid,
    status: row.status
  }

  if (row.user_name || row.user_avatar) {
    task.created_user = {
      email: row.user_email,
      nickname: row.user_name,
      avatar_url: row.user_avatar,
      uuid: row.user_uuid
    }
  }

  try {
    task.llm_params = JSON.parse(JSON.stringify(task.llm_params))
  } catch (e) {
    console.log('parse task llm_params failed', e)
  }

  return task
}
