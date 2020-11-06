import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createTeacher } from "./endpoint/createTeacher";
import { createMission } from "./endpoint/createMission";
import { createStudent } from "./endpoint/createStudent";
import { getAllMissions } from "./endpoint/getAllMissions";
import { getStudentAgeById } from "./endpoint/getAgeById";
import { deleteStudent } from "./endpoint/deleteStudent";
import { studentOnMission } from "./endpoint/studentOnMission";
import { teacherOnMission } from "./endpoint/teacherOnMission";
import { getStudentByMission } from "./endpoint/getStudentByMission";
import { deleteStudentFromMission } from "./endpoint/deleteStudentFromMission";
import { getTeacherByMission } from "./endpoint/getTeacherByMission";
import { StudentMissionUpdate } from "./endpoint/switchStudentMission";


dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())


app.post("/student/mission", studentOnMission)

app.post("/student/mission/update", StudentMissionUpdate)

app.post("/teacher/mission", teacherOnMission)

app.get("/mission", getAllMissions)

app.get("/age/:id", getStudentAgeById)

app.get("/student/mission", getStudentByMission)

app.get("/teacher/mission", getTeacherByMission)

app.put("/mission", createMission);

app.put("/teachers", createTeacher)

app.put("/student", createStudent)

app.delete("/delete/student/:id", deleteStudent)

app.delete("/student/mission/:id", deleteStudentFromMission)






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });