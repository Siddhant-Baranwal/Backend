import express from 'express';
import userRouter from "./Routes/user.js";
import taskRouter from "./Routes/task.js";
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
})

const router = express.Router();
app.use(express.json());
app.use(cookieParser());
app.use(userRouter);
app.use(taskRouter);
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.get("/", (req, res)=>{
    res.send("Nice work.");
});

app.use(errorMiddleware);