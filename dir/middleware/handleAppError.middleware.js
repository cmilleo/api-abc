"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = require("../errors/appError");
const handleAppErrorMiddeware = (error, req, res, _) => {
    if (error instanceof appError_1.AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    return res.status(500).json({
        message: "Internal server error",
    });
};
exports.default = handleAppErrorMiddeware;
//# sourceMappingURL=handleAppError.middleware.js.map