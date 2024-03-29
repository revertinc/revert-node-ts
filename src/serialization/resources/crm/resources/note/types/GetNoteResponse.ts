/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetNoteResponse: core.serialization.ObjectSchema<
    serializers.crm.GetNoteResponse.Raw,
    Revert.crm.GetNoteResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.lazyObject(async () => (await import("../../../../..")).common.Note),
});

export declare namespace GetNoteResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result: serializers.common.Note.Raw;
    }
}
