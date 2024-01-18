/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateCompanyResponse: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateCompanyResponse.Raw,
    Revert.crm.CreateOrUpdateCompanyResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    message: core.serialization.string(),
    result: core.serialization.unknown(),
});

export declare namespace CreateOrUpdateCompanyResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        message: string;
        result?: unknown;
    }
}
