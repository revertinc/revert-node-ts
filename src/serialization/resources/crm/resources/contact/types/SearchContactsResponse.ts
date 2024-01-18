/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const SearchContactsResponse: core.serialization.ObjectSchema<
    serializers.crm.SearchContactsResponse.Raw,
    Vellum.crm.SearchContactsResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Contact)
    ),
});

export declare namespace SearchContactsResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        results: serializers.common.Contact.Raw[];
    }
}
