/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as RevertRevertApi from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const UpdateAccountCredentialsRequest: core.serialization.Schema<
    serializers.internal.UpdateAccountCredentialsRequest.Raw,
    Omit<RevertRevertApi.internal.UpdateAccountCredentialsRequest, "xRevertApiToken">
> = core.serialization.object({
    clientId: core.serialization.string().optional(),
    clientSecret: core.serialization.string().optional(),
    scopes: core.serialization.list(core.serialization.string()).optional(),
    tpId: core.serialization.lazy(async () => (await import("../../../../../..")).common.Tpid),
    isRevertApp: core.serialization.boolean(),
    appId: core.serialization.string(),
    botToken: core.serialization.string().optional(),
});

export declare namespace UpdateAccountCredentialsRequest {
    interface Raw {
        clientId?: string | null;
        clientSecret?: string | null;
        scopes?: string[] | null;
        tpId: serializers.common.Tpid.Raw;
        isRevertApp: boolean;
        appId: string;
        botToken?: string | null;
    }
}
