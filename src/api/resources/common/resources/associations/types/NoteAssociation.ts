/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         dealId: "535586000000287437"
 *     }
 */
export interface NoteAssociation {
    /** The id of the contact to associate with note */
    contactId?: string;
    /** The id of the company to associate with note */
    companyId?: string;
    /** The id of the lead to associate with note */
    leadId?: string;
    /** The id of the deal to associate with note */
    dealId?: string;
}