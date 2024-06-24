import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { Category } from "./models/category.model";
import { CreateCategory } from "./controllers/createCtegory.controller";
import { deleteCategory } from "./controllers/deleteCategory.controller";
import { EditCategory } from "./controllers/editCategory.controller";
import { CreateTaskController } from "./controllers/createTask.controller";
import { Task } from "./models/task.model";
import { DeleteTaskController } from "./controllers/deleteTask.controller";
import { EditTask } from "./controllers/editTask.controller";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string, {});
    console.log("MongoDB Connected!");
  } catch {
    (e: any) => console.log("Error Connect to db:", e);
  }
};

connect();

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.post("/category/create", CreateCategory);

app.get("/category", async (req: Request, res: Response) => {
  const CategoryArr = await Category.find();
  res.send(CategoryArr);
});
app.get("/category/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const CategoryArr = await Category.findOne({ _id: id });
  res.send(CategoryArr);
});

app.delete("/category/:id", deleteCategory);

app.put("/category/:id", EditCategory);

app.post("/task/create", CreateTaskController);

app.get("/task/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const task = await Task.find({ category: id }).catch((err) => {
    return res.status(400).json(err);
  });
  return res.status(200).json(task);
});

app.delete("/task/:id", DeleteTaskController);

app.put("/task/:id", EditTask);

app.listen(PORT, () => {
  console.log(
    "Server is Successfully Running,and App is listening on port " + PORT,
  );
});
