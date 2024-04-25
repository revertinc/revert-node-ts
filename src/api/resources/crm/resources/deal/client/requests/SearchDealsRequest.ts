/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SearchDealsRequest {
    fields?: string;
    pageSize?: string;
    cursor?: string;
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
    searchCriteria?: unknown;
}
