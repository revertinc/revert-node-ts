/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors";
import * as Revert from "../../../../..";

export class UnAuthorizedError extends errors.RevertError {
    constructor(body: Revert.common.BaseError) {
        super({
            message: "UnAuthorizedError",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    }
}
