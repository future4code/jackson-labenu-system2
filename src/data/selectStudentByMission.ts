import {connection} from "../index"



export const selectStudentByMission = async():Promise<any> => {

    const result = await connection.raw(`
    SELECT stu.name, stu.id AS student_id, mission.id AS mission_id, 
    mission.name AS mission_name, mission.start_date, mission.end_date, mission.module 
    FROM Mission as mission
    JOIN Student as stu
    ON stu.mission_id = mission.id;
    `)

    return result[0]

}