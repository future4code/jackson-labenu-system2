import {connection} from "../index"


export const insertTeacherMission = async(teacherId:number, missionId:number):Promise<any> => {

    const result = await connection.raw(`
    INSERT INTO RelationTeacherMission(teacher_id, mission_id)
    VALUES(${teacherId},${missionId});
    `)

    return result[0]

}