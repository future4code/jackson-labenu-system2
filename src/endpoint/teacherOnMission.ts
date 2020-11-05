import {Response,Request} from "express"
import {insertTeacherMission} from "../data/insertTeacherMission"


export const teacherOnMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const {teacher_id, mission_id} = req.body

        if(!teacher_id || !mission_id) {
            res.statusCode = 400;
            throw new Error("Insira dados válidos para 'teacher_id' e 'mission_id'")
        }

        await insertTeacherMission(teacher_id, mission_id)

        res.status(200).send({message: "Professor alocado para turma com sucesso."})
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}