import {connection} from "../index"


export const updateTeacherMission = async(teacherId:number, missionId:number):Promise<any> => {

    const result = await connection.raw(`
        UPDATE Teacher
        SET mission_id = ${missionId}
        WHERE id = ${teacherId};
    `)

    return result[0]

}