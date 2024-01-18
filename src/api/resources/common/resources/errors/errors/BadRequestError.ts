/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors";
import * as RevertRevertApi from "../../../../..";

export class BadRequestError extends errors.RevertRevertApiError {
    constructor(body: RevertRevertApi.common.BaseError) {
        super({
            message: "BadRequestError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}