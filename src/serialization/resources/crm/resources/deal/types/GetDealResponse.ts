/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const GetDealResponse: core.serialization.ObjectSchema<
    serializers.crm.GetDealResponse.Raw,
    RevertRevertApi.crm.GetDealResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.lazyObject(async () => (await import("../../../../..")).common.Deal),
});

export declare namespace GetDealResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result: serializers.common.Deal.Raw;
    }
}
