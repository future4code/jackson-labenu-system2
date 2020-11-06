import {connection} from "../index"



export const selectStudentByMission = async(id:number):Promise<any> => {

    const result = await connection.raw(`
    SELECT stu.name, mission.name as mission_name FROM Student AS stu
    JOIN Mission as mission
    WHERE stu.mission_id = ${id} AND mission.id = stu.mission_id;
    `)

    return result[0]

}