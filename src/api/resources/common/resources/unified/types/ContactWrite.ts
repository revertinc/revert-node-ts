/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as RevertRevertApi from "../../../../..";

export interface ContactWrite {
    /** The first name of the contact in a CRM. */
    firstName: string;
    /** The last name of the contact in a CRM. */
    lastName: string;
    /** The phone number of the contact in a CRM. */
    phone: string;
    /** The email of the contact in a CRM. */
    email: string;
    associations?: RevertRevertApi.common.ContactAssociation;
}
