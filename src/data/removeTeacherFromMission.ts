import {connection} from "../index"


export const removeTeacherFromMission = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM RelationTeacherMission WHERE teacher_id = ${id}
    `)

    return result[0]

}