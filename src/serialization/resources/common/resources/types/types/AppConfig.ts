/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const AppConfig: core.serialization.ObjectSchema<serializers.common.AppConfig.Raw, Revert.common.AppConfig> =
    core.serialization.object({
        botToken: core.serialization.property("bot_token", core.serialization.string().optional()),
        orgUrl: core.serialization.property("org_url", core.serialization.string().optional()),
    });

export declare namespace AppConfig {
    interface Raw {
        bot_token?: string | null;
        org_url?: string | null;
    }
}
