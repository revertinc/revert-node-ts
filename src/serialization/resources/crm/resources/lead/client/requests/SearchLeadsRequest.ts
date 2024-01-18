/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Revert from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const SearchLeadsRequest: core.serialization.Schema<
    serializers.crm.SearchLeadsRequest.Raw,
    Omit<Revert.crm.SearchLeadsRequest, "fields" | "xRevertApiToken" | "xRevertTId" | "xApiVersion">
> = core.serialization.object({
    searchCriteria: core.serialization.unknown(),
});

export declare namespace SearchLeadsRequest {
    interface Raw {
        searchCriteria?: unknown;
    }
}
