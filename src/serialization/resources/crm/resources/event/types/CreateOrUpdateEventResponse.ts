/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateEventResponse: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateEventResponse.Raw,
    Vellum.crm.CreateOrUpdateEventResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    message: core.serialization.string(),
    result: core.serialization.unknown(),
});

export declare namespace CreateOrUpdateEventResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        message: string;
        result?: unknown;
    }
}
