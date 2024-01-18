/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateEventRequest: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateEventRequest.Raw,
    Revert.crm.CreateOrUpdateEventRequest
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.EventWrite));

export declare namespace CreateOrUpdateEventRequest {
    interface Raw extends serializers.common.EventWrite.Raw {}
}
