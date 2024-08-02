/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const DeleteCandidateResponse: core.serialization.ObjectSchema<
    serializers.ats.DeleteCandidateResponse.Raw,
    Revert.ats.DeleteCandidateResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    message: core.serialization.string(),
});

export declare namespace DeleteCandidateResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        message: string;
    }
}
