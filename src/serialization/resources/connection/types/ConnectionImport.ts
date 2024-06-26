/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const ConnectionImport: core.serialization.ObjectSchema<
    serializers.ConnectionImport.Raw,
    Revert.ConnectionImport
> = core.serialization.object({
    tpId: core.serialization.property(
        "tp_id",
        core.serialization.lazy(async () => (await import("../../..")).common.Tpid)
    ),
    tpAccessToken: core.serialization.property("tp_access_token", core.serialization.string()),
    tpRefreshToken: core.serialization.property("tp_refresh_token", core.serialization.string()),
    tpCustomerId: core.serialization.property("tp_customer_id", core.serialization.string()),
    tId: core.serialization.property("t_id", core.serialization.string()),
    tpAccountUrl: core.serialization.property("tp_account_url", core.serialization.string().optional()),
    appClientId: core.serialization.property("app_client_id", core.serialization.string()),
    appClientSecret: core.serialization.property("app_client_secret", core.serialization.string()),
    appId: core.serialization.property("app_id", core.serialization.string()),
});

export declare namespace ConnectionImport {
    interface Raw {
        tp_id: serializers.common.Tpid.Raw;
        tp_access_token: string;
        tp_refresh_token: string;
        tp_customer_id: string;
        t_id: string;
        tp_account_url?: string | null;
        app_client_id: string;
        app_client_secret: string;
        app_id: string;
    }
}
