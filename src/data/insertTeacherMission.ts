import {connection} from "../index"


export const insertTeacherMission = async(teacherId:number, missionId:number):Promise<any> => {

    const result = await connection
    .insert({
        teacher_id:teacherId,
        mission_id:missionId
    })
    .into("RelationTeacherMission")

    return result

}