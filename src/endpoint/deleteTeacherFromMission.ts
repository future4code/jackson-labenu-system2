import {Response, Request} from "express"
import { removeTeacherFromMission } from "../data/removeTeacherFromMission"
import { selectTeacherById } from "../data/selecetTeacherById"


export const deleteTeacherFromMission = async(req:Request, res:Response):Promise<void> => {


    try {
        
        const userExist = await selectTeacherById(Number(req.params.id))

        if(!userExist.length) {
            res.statusCode = 400;
            throw new Error("Usuário não encontrado.")
        }

        await removeTeacherFromMission(Number(req.params.id))

        res.status(200).send({message: "Professor removido com sucesso!"})

        
    } catch (error) {
        res.status(400).send(error.message)
    }

}