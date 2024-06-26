/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const SearchNotesResponse: core.serialization.ObjectSchema<
    serializers.crm.SearchNotesResponse.Raw,
    Revert.crm.SearchNotesResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).common.Note)
    ),
});

export declare namespace SearchNotesResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        next?: string | null;
        previous?: string | null;
        results: serializers.common.Note.Raw[];
    }
}
