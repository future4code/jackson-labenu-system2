import {connection} from "../index"



export const selectTeacherByMission = async():Promise<any> => {

    const result = await connection.raw(`
    SELECT teacher.name, teacher.id AS teacher, mission.id AS mission_id, 
    mission.name AS mission_name, mission.start_date, mission.end_date, mission.module 
    FROM Mission as mission
    JOIN Teacher as teacher
    ON teacher.mission_id = mission.id;
    `)

    return result[0]

}