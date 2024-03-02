/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateAccountFieldMappingResponse: core.serialization.ObjectSchema<
    serializers.crm.CreateAccountFieldMappingResponse.Raw,
    Revert.crm.CreateAccountFieldMappingResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
});

export declare namespace CreateAccountFieldMappingResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
    }
}
