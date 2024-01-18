/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as RevertRevertApi from "../../../../api";
import * as core from "../../../../core";

export const GetConnectionWebhookResponse: core.serialization.ObjectSchema<
    serializers.GetConnectionWebhookResponse.Raw,
    RevertRevertApi.GetConnectionWebhookResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../..")).common.ResponseStatus),
    webhook: core.serialization.unknown(),
    error: core.serialization.string().optional(),
    errorMessage: core.serialization.unknown().optional(),
});

export declare namespace GetConnectionWebhookResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        webhook?: unknown;
        error?: string | null;
        errorMessage?: unknown | null;
    }
}
