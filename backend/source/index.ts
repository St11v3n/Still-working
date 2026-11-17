import "dotenv/config";
import express from "express";
import cors from "cors";
import {sync} from "./db.ts"
// sync -db
//approutes

const port = process.env.PORT;
const host = "localhost";

const app = express();

app.use(cors())
app.use(express.json())

//appi

app.listen(port, async() => {
    if (process.env.SYNIC === "true") {
        await sync()
    }
    console.log(`api jookseb aadressil http://${host}:${port}`)
})