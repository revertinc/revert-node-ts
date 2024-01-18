/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors";
import * as RevertRevertApi from "../../../../..";

export class NotFoundError extends errors.RevertRevertApiError {
    constructor(body: RevertRevertApi.common.BaseError) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}