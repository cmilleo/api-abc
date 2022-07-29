"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = __importDefault(require("./data-source"));
require("dotenv/config");
const InitConnection = async () => {
    await data_source_1.default.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
    app_1.default.listen(process.env.port || 3000, () => {
        console.log("Server is running");
    });
};
InitConnection();
//# sourceMappingURL=server.js.map