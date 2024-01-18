/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const SearchCompaniesResponse: core.serialization.ObjectSchema<
    serializers.crm.SearchCompaniesResponse.Raw,
    Vellum.crm.SearchCompaniesResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Company)
    ),
});

export declare namespace SearchCompaniesResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        results: serializers.common.Company.Raw[];
    }
}
