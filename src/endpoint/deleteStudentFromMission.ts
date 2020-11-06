import {Response, Request} from "express"
import {removeStudentFromMission} from "../data/removeStudentFromMission"
import { selectStudentByIdRelation } from "../data/selectStudentByIdRelation"


export const deleteStudentFromMission = async(req:Request, res:Response):Promise<void> => {


    try {
        
        const userExist = await selectStudentByIdRelation(Number(req.params.id))

        if(!userExist.length) {
            res.statusCode = 400;
            throw new Error("Usuário não encontrado.")
        }

        await removeStudentFromMission(Number(req.params.id))

        res.status(200).send({message: "Estudante removido com sucesso!"})

        
    } catch (error) {
        res.status(400).send(error.message)
    }

}