import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { status } from "http-status";
import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";
import cors from "cors";

import userRoutes from "./routes/usersRoutes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/api/v1/users",userRoutes)

const port = 8080;
const start = async () => {

    const connectionDb = await mongoose.connect("mongodb+srv://somildholakia0852_db_user:Somil5515@cluster0.7jzumvw.mongodb.net/?appName=Cluster0");
    console.log(`Mongo connected db Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log(`Port working at ${port}`);
    })

}

start();