import {connection} from "../index"



export const insertTeacher = async(id:number, name:string, email:string, birthdate:Date, mission_id:number):Promise<any> => {

    const result = await connection
    .insert({
        id:id,
        name: name,
        email:email,
        birthdate:new Date(birthdate),
        mission_id: mission_id
    })
    .into("Teacher")

    return result

}