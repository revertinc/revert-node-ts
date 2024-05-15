/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const TriggerSyncResponse: core.serialization.ObjectSchema<
    serializers.TriggerSyncResponse.Raw,
    Revert.TriggerSyncResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../..")).common.ResponseStatus),
});

export declare namespace TriggerSyncResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
    }
}