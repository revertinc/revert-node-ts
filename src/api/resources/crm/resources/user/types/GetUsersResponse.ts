/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../..";

export interface GetUsersResponse {
    status: Vellum.common.ResponseStatus;
    next?: string;
    previous?: string;
    results: Vellum.common.User[];
}
