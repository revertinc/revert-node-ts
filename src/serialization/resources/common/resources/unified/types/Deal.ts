/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Deal: core.serialization.ObjectSchema<serializers.common.Deal.Raw, RevertRevertApi.common.Deal> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.DealWrite));

export declare namespace Deal {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.DealWrite.Raw {}
}