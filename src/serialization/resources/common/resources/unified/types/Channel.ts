/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Channel: core.serialization.ObjectSchema<serializers.common.Channel.Raw, Revert.common.Channel> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        createdTimestamp: core.serialization.unknown(),
    });

export declare namespace Channel {
    interface Raw {
        id: string;
        name: string;
        createdTimestamp?: unknown;
    }
}
