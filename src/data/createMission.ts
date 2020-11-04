import {connection} from "../index"

export async function createNewMission(
   id: number,
   name: string,
   start_date: Date,
   end_date: Date,
   modules: number
): Promise<any>{
 
   const result = await connection
         .insert({
            id: id,
            name: name,
            start_date: start_date,
            end_date: end_date,
            module: modules
         })
         .into("Mission")

         return result
        }



// export async function createNewMission(
//    id: number,
//    name: string,
//    start_date: Date,
//    end_date: Date,
//    modules: number

// ): Promise<any> {
 
       
//      const result =  await connection.raw(`
//          INSERT INTO Mission VALUES (
//             id = ${id},
//             name = "${name}",
//             start_date = "${start_date}",
//             end_date = "${end_date}",
//             module = ${modules}
//          );
//       `)
//       return result[0]}