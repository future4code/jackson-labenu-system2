import { Request, Response } from "express"
import { getMissions } from "../data/getMissions"
import { Mission } from "../types/InputData"



export const getAllMissions = async (req: Request, res: Response) => {
   try {

      const missions: Mission[] = await getMissions()

      if (!missions.length) {
         res.statusCode = 404
         throw new Error("No pokemons found")
      }

      res.status(200).send(missions)

   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
}