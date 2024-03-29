/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const SearchDealsResponse: core.serialization.ObjectSchema<
    serializers.crm.SearchDealsResponse.Raw,
    Revert.crm.SearchDealsResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Deal)
    ),
});

export declare namespace SearchDealsResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        results: serializers.common.Deal.Raw[];
    }
}
