import {connection} from "../index"

export const getAgeById = async(id:number):Promise<any> => {

      const result = await connection.raw(
          `SELECT ROUND(DATEDIFF(CURRENT_DATE, birthdate)/ 365) AS Age FROM Student WHERE  id = ${id}`)

      return result[0]
}