import {connection} from "../index"

export async function selectStudentByIdRelation(id:number):Promise<any> {

      const result = await connection.raw(`SELECT * FROM RelationStudentMission WHERE student_id = ${id}`)

      return result[0]
}