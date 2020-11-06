import {Response, Request} from "express"
import { switchStudentMission } from "../data/switchStudentMission"
import  { updateStudentMission } from "../data/updateStudentMission"



export const StudentMissionUpdate = async(req:Request, res:Response):Promise<void> => {

    try {

        const {student_id, mission_id} = req.body

        // if(!name || !email || !birthdate || !id || !mission_id) {
        //     res.statusCode = 404
        //     throw new Error("Insira dados válidos para 'name', 'email' e 'birthdate'")
        // }

        await switchStudentMission(student_id, mission_id)
        await updateStudentMission(student_id, mission_id)

        res.status(200).send({message: "Uptate sucessfully"})
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}