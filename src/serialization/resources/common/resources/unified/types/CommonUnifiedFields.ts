/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CommonUnifiedFields: core.serialization.ObjectSchema<
    serializers.common.CommonUnifiedFields.Raw,
    Revert.common.CommonUnifiedFields
> = core.serialization.object({
    id: core.serialization.string(),
    remoteId: core.serialization.string(),
    createdTimestamp: core.serialization.unknown(),
    updatedTimestamp: core.serialization.unknown(),
    additional: core.serialization.unknown().optional(),
});

export declare namespace CommonUnifiedFields {
    interface Raw {
        id: string;
        remoteId: string;
        createdTimestamp?: unknown;
        updatedTimestamp?: unknown;
        additional?: unknown | null;
    }
}
