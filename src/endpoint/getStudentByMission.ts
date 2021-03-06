import {Request,Response} from "express"
import {selectStudentByMission} from "../data/selectStudentByMission"

export const getStudentByMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const studentByMission = await selectStudentByMission(Number(req.params.id))

        if(!studentByMission) {
            res.statusCode = 400;
            throw new Error("Parâmetro inválido!")
        }

        if(studentByMission.length === 0) {
            res.statusCode = 404;
            throw new Error("Turma não encontrada ou não há estudantes na turma")
        }

        res.status(200).send(studentByMission)
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}