/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetDealsResponse: core.serialization.ObjectSchema<
    serializers.crm.GetDealsResponse.Raw,
    RevertRevertApi.crm.GetDealsResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Deal)
    ),
});

export declare namespace GetDealsResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        next?: string | null;
        previous?: string | null;
        results: serializers.common.Deal.Raw[];
    }
}