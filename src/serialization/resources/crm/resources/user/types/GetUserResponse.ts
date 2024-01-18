/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetUserResponse: core.serialization.ObjectSchema<
    serializers.crm.GetUserResponse.Raw,
    RevertRevertApi.crm.GetUserResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.lazyObject(async () => (await import("../../../../..")).common.User),
});

export declare namespace GetUserResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result: serializers.common.User.Raw;
    }
}
