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
exports.deleteCategory = void 0;
const category_model_1 = require("../models/category.model");
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const category = yield category_model_1.Category.deleteOne({ _id: id });
    if (category.deletedCount === 0) {
        return res.status(404).json("Category not found");
    }
    else {
        res.status(202).end();
    }
});
exports.deleteCategory = deleteCategory;
