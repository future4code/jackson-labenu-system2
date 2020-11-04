import {connection} from "../index"
import { Mission } from "../types/InputData";

export async function getMissions():Promise<Mission[]> {
   try {
      const result = await connection.raw("SELECT * FROM Mission")

      return result[0]
   } catch (error) {
      console.log(error)
      return []
   }
}