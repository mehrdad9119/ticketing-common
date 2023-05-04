import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    public errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super('Error validating request data!');
        this.errors = errors;

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg }
        });;
    }
}