import {Request, Response} from "express"
import { createNewMission } from "../data/createMission";
import { getMissions } from "../data/getMissions";
import { Mission } from "../types/InputData";

export const createMission = async (req: Request, res: Response): Promise<void> => {
   try {

      const {id, name, start_date, end_date, modules} = req.body;


      if (!id || !name || !start_date || !end_date || !modules) {
         res.statusCode = 409
         throw new Error("Parâmetro inválido. Preencha os campos corretamente.")
      }

      await createNewMission(id, name, start_date, end_date, modules)

      res.status(201).send("Turma criada com sucesso!")

   } catch (err) {

    res.status(400).send({
        message: err.message || err.sqlMessage
     })

   }
}