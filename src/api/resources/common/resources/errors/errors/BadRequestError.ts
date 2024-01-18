/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors";
import * as Vellum from "../../../../..";

export class BadRequestError extends errors.VellumError {
    constructor(body: Vellum.common.BaseError) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
