import {connection} from "../index"

export const insertStuMission = async(studentId:number, missionId:number):Promise<any> => {

    const result = await connection
    .insert({
        student_id:studentId,
        mission_id:missionId
    })
    .into("RelationStudentMission")

    return result

}