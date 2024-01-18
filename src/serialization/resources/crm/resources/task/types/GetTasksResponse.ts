/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetTasksResponse: core.serialization.ObjectSchema<
    serializers.crm.GetTasksResponse.Raw,
    Revert.crm.GetTasksResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Task)
    ),
});

export declare namespace GetTasksResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        next?: string | null;
        previous?: string | null;
        results: serializers.common.Task.Raw[];
    }
}
