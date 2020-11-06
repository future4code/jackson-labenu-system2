import {connection} from "../index"



export const selectTeacherByMission = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    SELECT teacher.name, mission.name as mission_name FROM Teacher AS teacher
    JOIN Mission as mission
    WHERE teacher.mission_id = ${id} AND mission.id = teacher.mission_id;
    `)

    return result[0]

}