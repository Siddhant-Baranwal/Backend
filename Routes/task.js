import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/task/new", isAuthenticated,  newTask);
router.get("/task/my", isAuthenticated, getMyTask);
router.route("/task/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);

export default router;