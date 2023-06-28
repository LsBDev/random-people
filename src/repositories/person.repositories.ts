import { db } from "../database/database.connection"

export function getPersonDB() {
  return db.query(`
    SELECT * FROM people;
  `)
}