/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Revert from "../../../../..";

export interface DealWrite {
    /** The deal amount mentioned in the CRM for this deal. */
    amount: number;
    /** The priority attached to this deal. (not supported by pipedrive) */
    priority?: string;
    /** Deal stage in the CRM. */
    stage: string;
    /** The name of the deal in a CRM. */
    name: string;
    /** Expected close date for this deal. (not supported by pipedrive search api) */
    expectedCloseDate?: unknown;
    /** Is `true` if the deal is closed (won). */
    isWon: boolean;
    /** Probability of the deal getting closed, a decimal number between 0 to 1 (inclusive). */
    probability: number;
    associations?: Revert.common.DealAssociation;
}
