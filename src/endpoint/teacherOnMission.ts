import {Response,Request} from "express"
import {insertTeacherMission} from "../data/insertTeacherMission"
import { selectTeacherById } from "../data/selecetTeacherById";
import { selectTeacherMission } from "../data/selectTeacherMission";
import { updateTeacherMission } from "../data/updateTeacherMission";


export const teacherOnMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const {teacher_id, mission_id} = req.body


        if(!teacher_id || !mission_id) {
            res.statusCode = 400;
            throw new Error("Insira dados válidos para 'teacher_id' e 'mission_id'")
        }

       
        await insertTeacherMission(teacher_id, mission_id)
        await updateTeacherMission(teacher_id, mission_id)

        res.status(200).send({message: "professor alocado para turma correta"})


        
    } catch (error) {
        res.status(400).send(error.message)
    }

}