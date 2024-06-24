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
exports.CreateCategory = void 0;
const category_model_1 = require("../models/category.model");
const CreateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.body;
    const body = yield request;
    const existCategory = yield category_model_1.Category.findOne({ title: body.title });
    if (!!existCategory) {
        return res.status(400).json("Category with this title already exists");
    }
    const newCategory = yield category_model_1.Category.create({ title: body.title });
    const { title, _id } = newCategory;
    res.send({ title, id: _id });
});
exports.CreateCategory = CreateCategory;
