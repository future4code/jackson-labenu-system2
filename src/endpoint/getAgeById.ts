import { Request, Response } from "express"
import { getAgeById } from "../data/getAgeById"




export const getStudentAgeById = async (req: Request, res: Response):Promise<void> => {
   try {

      const age = await getAgeById(Number(req.params.id))

      if (age.length === 0) {
         res.status(404).send({meessage: "Not found!"})
      } else {
        res.status(200).send(age)
      }
   } catch (error) {
      res.send(error.message)
   }
}