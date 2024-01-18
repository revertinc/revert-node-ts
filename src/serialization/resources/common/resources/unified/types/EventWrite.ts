/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const EventWrite: core.serialization.ObjectSchema<serializers.common.EventWrite.Raw, Revert.common.EventWrite> =
    core.serialization.object({
        type: core.serialization.string(),
        subject: core.serialization.string(),
        startDateTime: core.serialization.string(),
        endDateTime: core.serialization.string(),
        isAllDayEvent: core.serialization.boolean(),
        description: core.serialization.string(),
        location: core.serialization.string(),
        associations: core.serialization
            .lazyObject(async () => (await import("../../../../..")).common.EventAssociation)
            .optional(),
    });

export declare namespace EventWrite {
    interface Raw {
        type: string;
        subject: string;
        startDateTime: string;
        endDateTime: string;
        isAllDayEvent: boolean;
        description: string;
        location: string;
        associations?: serializers.common.EventAssociation.Raw | null;
    }
}
