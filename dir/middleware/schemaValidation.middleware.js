"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidation = void 0;
const yup_1 = require("yup");
const appError_1 = require("../errors/appError");
const schemaValidation = (schema) => async (req, res, next) => {
    try {
        const validation = await schema.validate(req.body);
        let invalidFields = [];
        for (let i in req.body) {
            if (!Object.keys(validation).some((key) => key === i)) {
                invalidFields.push(i);
            }
        }
        if (invalidFields.length > 0) {
            throw new yup_1.ValidationError(invalidFields.length > 1
                ? `(${invalidFields.join(", ")}) are invalids fields`
                : `(${invalidFields[0]}) is an invalid field`);
        }
        next();
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            throw new appError_1.AppError(error.errors.join(", "));
        }
    }
};
exports.schemaValidation = schemaValidation;
//# sourceMappingURL=schemaValidation.middleware.js.map