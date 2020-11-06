import { Request, Response } from "express"
import { DeleteStudentById } from "../data/deleteStudent"
import { deleteStudentFromRelation } from "../data/deleteStudentFromRelation"
import { selectStudentByIdRelation } from "../data/selectStudentByIdRelation"





export const deleteStudent = async (req: Request, res: Response):Promise<void> => {
   try {

      const uxerExist = await selectStudentByIdRelation(Number(req.params.id))

      if (!uxerExist.length) {
         res.statusCode = 404
         throw new Error("Estudante não encontrado.")
      }

      await deleteStudentFromRelation(Number(req.params.id))
      await DeleteStudentById(Number(req.params.id))

      res.send(200).send({message: "Estudante removido com sucesso."})
      
   } catch (error) {
      res.send(error.message)
   }
}