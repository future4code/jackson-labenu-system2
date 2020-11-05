import {Request,Response} from "express"
import {selectStudentByMission} from "../data/selectStudentByMission"
import { selectTeacherByMission } from "../data/selectTeacherByMission";

export const getTeacherByMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const teacherByMission = await selectTeacherByMission()

        if(!teacherByMission) {
            res.statusCode = 400;
            throw new Error("Parâmetro inválido!")
        }

        if(teacherByMission.length === 0) {
            res.statusCode = 404;
            throw new Error("Estudante não encontrado.")
        }

        res.status(200).send(teacherByMission)
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}