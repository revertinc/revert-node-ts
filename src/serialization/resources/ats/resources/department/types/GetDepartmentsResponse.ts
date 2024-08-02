/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetDepartmentsResponse: core.serialization.ObjectSchema<
    serializers.ats.GetDepartmentsResponse.Raw,
    Revert.ats.GetDepartmentsResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.unknown(),
});

export declare namespace GetDepartmentsResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        next?: string | null;
        previous?: string | null;
        results?: unknown;
    }
}