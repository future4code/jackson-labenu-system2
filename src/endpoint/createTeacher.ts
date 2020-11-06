import {Response, Request} from "express"
import {insertTeacher} from "../data/insertTeacher"
import { insertTeacherMission } from "../data/insertTeacherMission"



export const createTeacher = async(req:Request, res:Response):Promise<void> => {

    try {

        const {id, name, email, birthdate, mission_id} = req.body

        if(!name || !email || !birthdate || !id || !mission_id) {
            res.statusCode = 404
            throw new Error("Insira dados válidos para 'name', 'email' e 'birthdate'")
        }

        await insertTeacher(id, name, email, birthdate, mission_id)
        await insertTeacherMission(id, mission_id)

        res.status(200).send({message: "User created sucessfully"})
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}