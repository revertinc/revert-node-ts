/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Lead: core.serialization.ObjectSchema<serializers.common.Lead.Raw, Revert.common.Lead> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.LeadRead));

export declare namespace Lead {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.LeadRead.Raw {}
}
