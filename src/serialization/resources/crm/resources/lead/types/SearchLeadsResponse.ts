/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const SearchLeadsResponse: core.serialization.ObjectSchema<
    serializers.crm.SearchLeadsResponse.Raw,
    Vellum.crm.SearchLeadsResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Lead)
    ),
});

export declare namespace SearchLeadsResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        results: serializers.common.Lead.Raw[];
    }
}
