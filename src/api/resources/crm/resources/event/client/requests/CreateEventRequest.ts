/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../../..";

export interface CreateEventRequest {
    /**
     * Your official API key for accessing revert apis.
     */
    xRevertApiToken: string;
    /**
     * The unique customer id used when the customer linked their account.
     */
    xRevertTId: string;
    /**
     * Optional Revert API version you're using. If missing we default to the latest version of the API.
     */
    xApiVersion?: string;
    body: Vellum.crm.CreateOrUpdateEventRequest;
}
