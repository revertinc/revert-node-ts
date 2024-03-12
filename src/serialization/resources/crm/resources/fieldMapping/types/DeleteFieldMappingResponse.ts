/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const DeleteFieldMappingResponse: core.serialization.ObjectSchema<
    serializers.crm.DeleteFieldMappingResponse.Raw,
    Revert.crm.DeleteFieldMappingResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    message: core.serialization.string(),
});

export declare namespace DeleteFieldMappingResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        message: string;
    }
}