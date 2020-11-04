import {connection} from "../index"

export async function createNewStudent(
   id: number,
   name: string,
   email: string,
   hobbie: string,
   birthdate: Date,
   mission_id: number

): Promise<any>{
 
   const result = await connection
         .insert({
            id: id,
            name: name,
            email: email,
            hobbies: hobbie,
            birthdate: birthdate,
            mission_id: mission_id
         })
         .into("Student")

         return result
        }

   