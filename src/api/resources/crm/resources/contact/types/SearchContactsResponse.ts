/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Revert from "../../../../..";

export interface SearchContactsResponse {
    status: Revert.common.ResponseStatus;
    next?: string;
    previous?: string;
    results: Revert.common.Contact[];
}
