import {connection} from "../index"

export async function selectStudentById(id:number):Promise<any> {

      const result = await connection.raw(`SELECT * FROM Student WHERE id = ${id}`)

      return result[0]
}