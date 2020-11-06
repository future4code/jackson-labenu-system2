import {Request, Response} from "express"
import { createNewStudent } from "../data/createStudent";
import { insertStuMission } from "../data/insertStuMission";


export const createStudent = async (req: Request, res: Response): Promise<void> => {
   
   try {

      const {id, name, email, hobbies, birthdate, mission_id} = req.body;

      if (!id || !name || !email || !hobbies || !birthdate || !mission_id) {
         res.statusCode = 409
         throw new Error("Parâmetros inválidos.")
      }

      await createNewStudent(id, name, email, hobbies, birthdate, mission_id)
      await insertStuMission(id, mission_id)

      res.status(201).send("Estudante criado com sucesso!");

   } catch (err) {
    res.status(400).send({
        message: err.message || err.sqlMessage
     })

   }
}