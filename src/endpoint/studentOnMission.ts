import {Response,Request} from "express"
import {insertStuMission} from "../data/insertStuMission"


export const studentOnMission = async(req:Request, res:Response):Promise<void> => {

    try {

        const {student_id, mission_id} = req.body

        if(!student_id || !mission_id) {
            res.statusCode = 400;
            throw new Error("Insira valores válidos para student_id e mission_id")
        }

        await insertStuMission(student_id, mission_id)

        res.status(200).send({message: "O estudante foi alocado para a turma!"})
        
    } catch (error) {
        res.status(400).send(error.message)

    }

}