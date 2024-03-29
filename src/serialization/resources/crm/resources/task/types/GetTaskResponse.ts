/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetTaskResponse: core.serialization.ObjectSchema<
    serializers.crm.GetTaskResponse.Raw,
    Revert.crm.GetTaskResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.lazyObject(async () => (await import("../../../../..")).common.Task),
});

export declare namespace GetTaskResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result: serializers.common.Task.Raw;
    }
}
