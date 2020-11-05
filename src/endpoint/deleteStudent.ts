import { Request, Response } from "express"
import { DeleteStudentById } from "../data/deleteStudent"





export const deleteStudent = async (req: Request, res: Response):Promise<void> => {
   try {

      const age = await DeleteStudentById(Number(req.params.id))

      if (age.length === 0) {
         res.status(404).send({meessage: "Not found!"})
      } else {
        res.status(200).send(age)
      }
   } catch (error) {
      res.send(error.message)
   }
}