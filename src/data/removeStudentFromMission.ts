import {connection} from "../index"


export const removeStudentFromMission = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM RelationStudentMission WHERE student_id = ${id}
    `)

    return result[0]

}