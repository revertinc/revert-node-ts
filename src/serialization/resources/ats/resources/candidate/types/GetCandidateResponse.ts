/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetCandidateResponse: core.serialization.ObjectSchema<
    serializers.ats.GetCandidateResponse.Raw,
    Revert.ats.GetCandidateResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.unknown(),
});

export declare namespace GetCandidateResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result?: unknown;
    }
}
