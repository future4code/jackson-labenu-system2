import {connection} from "../index"


export const selectTeacherMission = async(teacherId:number, missionId:Number):Promise<boolean> => {

    const result = await connection.raw(`
    SELECT * FROM RelationTeacherMission
    WHERE teacher_id = ${teacherId} AND mission_id = ${missionId};
    `)

    return result.length > 0

}