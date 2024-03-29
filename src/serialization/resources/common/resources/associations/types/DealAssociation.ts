/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const DealAssociation: core.serialization.ObjectSchema<
    serializers.common.DealAssociation.Raw,
    Revert.common.DealAssociation
> = core.serialization.object({
    contactId: core.serialization.string().optional(),
    companyId: core.serialization.string().optional(),
});

export declare namespace DealAssociation {
    interface Raw {
        contactId?: string | null;
        companyId?: string | null;
    }
}
