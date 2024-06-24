"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: false },
    tasks: { type: mongoose_1.Schema.Types.ObjectId },
}, { timestamps: true });
exports.Category = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.Category) || (0, mongoose_1.model)("Category", CategorySchema);
