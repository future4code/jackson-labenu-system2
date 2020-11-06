import {connection} from "../index"

export const updateStudentMission = async(student_id: number, mission_id:number):Promise<any> => {

      const result = await connection.raw(
          `UPDATE FROM Student 
          SET mission_id = ${mission_id}
          WHERE id = ${student_id}`)

      return result[0]
}