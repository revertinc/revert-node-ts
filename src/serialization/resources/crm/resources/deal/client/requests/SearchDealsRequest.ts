/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Revert from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const SearchDealsRequest: core.serialization.Schema<
    serializers.crm.SearchDealsRequest.Raw,
    Omit<Revert.crm.SearchDealsRequest, "fields" | "xRevertApiToken" | "xRevertTId" | "xApiVersion">
> = core.serialization.object({
    searchCriteria: core.serialization.unknown(),
});

export declare namespace SearchDealsRequest {
    interface Raw {
        searchCriteria?: unknown;
    }
}
