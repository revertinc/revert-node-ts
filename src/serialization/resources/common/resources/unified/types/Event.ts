/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Event: core.serialization.ObjectSchema<serializers.common.Event.Raw, RevertRevertApi.common.Event> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.EventWrite));

export declare namespace Event {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.EventWrite.Raw {}
}