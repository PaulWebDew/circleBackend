"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const category_model_1 = require("./models/category.model");
const createCtegory_controller_1 = require("./controllers/createCtegory.controller");
const deleteCategory_controller_1 = require("./controllers/deleteCategory.controller");
const editCategory_controller_1 = require("./controllers/editCategory.controller");
const createTask_controller_1 = require("./controllers/createTask.controller");
const task_model_1 = require("./models/task.model");
const deleteTask_controller_1 = require("./controllers/deleteTask.controller");
const editTask_controller_1 = require("./controllers/editTask.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 4000;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URL, {});
        console.log("MongoDB Connected!");
    }
    catch (_a) {
        (e) => console.log("Error Connect to db:", e);
    }
});
connect();
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.post("/category/create", createCtegory_controller_1.CreateCategory);
app.get("/category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CategoryArr = yield category_model_1.Category.find();
    res.send(CategoryArr);
}));
app.get("/category/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const CategoryArr = yield category_model_1.Category.findOne({ _id: id });
    res.send(CategoryArr);
}));
app.delete("/category/:id", deleteCategory_controller_1.deleteCategory);
app.put("/category/:id", editCategory_controller_1.EditCategory);
app.post("/task/create", createTask_controller_1.CreateTaskController);
app.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const task = yield task_model_1.Task.find({ category: id }).catch((err) => {
        return res.status(400).json(err);
    });
    return res.status(200).json(task);
}));
app.delete("/task/:id", deleteTask_controller_1.DeleteTaskController);
app.put("/task/:id", editTask_controller_1.EditTask);
app.listen(PORT, () => {
    console.log("Server is Successfully Running,and App is listening on port " + PORT);
});
