"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId },
}, { timestamps: true });
exports.Task = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.Task) || (0, mongoose_1.model)("Task", TaskSchema);
