/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const RecentConnections: core.serialization.ObjectSchema<
    serializers.common.RecentConnections.Raw,
    RevertRevertApi.common.RecentConnections
> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.string(),
});

export declare namespace RecentConnections {
    interface Raw {
        id: string;
        createdAt: string;
    }
}
