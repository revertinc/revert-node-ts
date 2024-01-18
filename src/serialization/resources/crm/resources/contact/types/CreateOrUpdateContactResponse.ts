/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateContactResponse: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateContactResponse.Raw,
    RevertRevertApi.crm.CreateOrUpdateContactResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    message: core.serialization.string(),
    result: core.serialization.unknown(),
});

export declare namespace CreateOrUpdateContactResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        message: string;
        result?: unknown;
    }
}
