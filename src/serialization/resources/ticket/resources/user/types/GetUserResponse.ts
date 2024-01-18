/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetUserResponse: core.serialization.ObjectSchema<
    serializers.ticket.GetUserResponse.Raw,
    RevertRevertApi.ticket.GetUserResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.unknown(),
});

export declare namespace GetUserResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result?: unknown;
    }
}