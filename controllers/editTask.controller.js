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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTask = void 0;
const task_model_1 = require("../models/task.model");
const EditTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const title = req.body.title;
    try {
        const task = yield task_model_1.Task.findByIdAndUpdate({ _id: id }, { title });
        if (task === null)
            return res.status(404).send("Task not found");
        return res.status(202).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error Deleting Task");
    }
});
exports.EditTask = EditTask;
