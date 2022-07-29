"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getDepartamentService_1 = __importDefault(require("../../services/departaments/getDepartamentService"));
const getDepartamentController = async (req, res) => {
    const departament = await (0, getDepartamentService_1.default)();
    return res.status(200).json(departament);
};
exports.default = getDepartamentController;
//# sourceMappingURL=getDepartamentController.js.map