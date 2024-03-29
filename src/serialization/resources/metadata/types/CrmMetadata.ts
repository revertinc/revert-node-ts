/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const CrmMetadata: core.serialization.ObjectSchema<serializers.CrmMetadata.Raw, Revert.CrmMetadata> =
    core.serialization.object({
        integrationId: core.serialization.string(),
        name: core.serialization.string(),
        imageSrc: core.serialization.string(),
        status: core.serialization.lazy(async () => (await import("../../..")).CrmStatus),
        clientId: core.serialization.string().optional(),
        scopes: core.serialization.list(core.serialization.string()),
    });

export declare namespace CrmMetadata {
    interface Raw {
        integrationId: string;
        name: string;
        imageSrc: string;
        status: serializers.CrmStatus.Raw;
        clientId?: string | null;
        scopes: string[];
    }
}
