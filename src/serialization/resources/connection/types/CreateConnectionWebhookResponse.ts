/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const CreateConnectionWebhookResponse: core.serialization.ObjectSchema<
    serializers.CreateConnectionWebhookResponse.Raw,
    Revert.CreateConnectionWebhookResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../..")).common.ResponseStatus),
    webhookUrl: core.serialization.string(),
    createdAt: core.serialization.string(),
    secret: core.serialization.string(),
    error: core.serialization.string().optional(),
    errorMessage: core.serialization.unknown().optional(),
});

export declare namespace CreateConnectionWebhookResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        webhookUrl: string;
        createdAt: string;
        secret: string;
        error?: string | null;
        errorMessage?: unknown | null;
    }
}
