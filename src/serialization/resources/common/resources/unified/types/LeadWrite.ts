/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const LeadWrite: core.serialization.ObjectSchema<serializers.common.LeadWrite.Raw, Revert.common.LeadWrite> =
    core.serialization.object({
        firstName: core.serialization.string(),
        lastName: core.serialization.string(),
        phone: core.serialization.string(),
        email: core.serialization.string(),
        associations: core.serialization
            .lazyObject(async () => (await import("../../../../..")).common.LeadAssociation)
            .optional(),
    });

export declare namespace LeadWrite {
    interface Raw {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        associations?: serializers.common.LeadAssociation.Raw | null;
    }
}
