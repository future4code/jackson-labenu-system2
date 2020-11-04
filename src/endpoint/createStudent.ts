import {Request, Response} from "express"
import { createNewStudent } from "../data/createStudent";


export const createStudent = async (req: Request, res: Response): Promise<void> => {
   try {

      const {id, name, email, hobbies, birthdate, mission_id} = req.body;

     await createNewStudent(id, name, email, hobbies, birthdate, mission_id)


      if (!id || !name || !email || !hobbies || !birthdate || !mission_id) {
         res.statusCode = 409
         throw new Error("Missing arguments!")
      }

      res.status(201).send("New Student created!");
   } catch (err) {
    res.status(400).send({
        message: err.message || err.sqlMessage
     })

   }
}