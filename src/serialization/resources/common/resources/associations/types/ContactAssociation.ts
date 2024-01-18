/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const ContactAssociation: core.serialization.ObjectSchema<
    serializers.common.ContactAssociation.Raw,
    Vellum.common.ContactAssociation
> = core.serialization.object({
    dealId: core.serialization.string().optional(),
    leadId: core.serialization.string().optional(),
});

export declare namespace ContactAssociation {
    interface Raw {
        dealId?: string | null;
        leadId?: string | null;
    }
}
