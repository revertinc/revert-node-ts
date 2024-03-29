/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const FieldDetailsType: core.serialization.ObjectSchema<
    serializers.crm.FieldDetailsType.Raw,
    Revert.crm.FieldDetailsType
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.string(),
    description: core.serialization.string(),
});

export declare namespace FieldDetailsType {
    interface Raw {
        name: string;
        type: string;
        description: string;
    }
}
