import {connection} from "../index"

export async function switchStudentMission(mission_id: number, student_id: number ):Promise<any> {

      const result = await connection.raw(`UPDATE RelationStudentMission
      SET mission_id = ${mission_id}
      WHERE student_id = ${student_id};`)

      return result[0]
}