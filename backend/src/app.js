import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";
import cors from "cors";

import router from "./routes/usersRoutes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());





const port = 8080;

const start = async () => {

    const connectionDb = await mongoose.connect("mongodb+srv://somildholakia0852_db_user:Somil5515@cluster0.7jzumvw.mongodb.net/?appName=Cluster0");
    console.log(`Mongo connected db Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log(`Port working at ${port}`);
    })

}

start();