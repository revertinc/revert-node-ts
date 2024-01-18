/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const UserChat: core.serialization.ObjectSchema<serializers.common.UserChat.Raw, Revert.common.UserChat> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        createdTimestamp: core.serialization.unknown(),
    });

export declare namespace UserChat {
    interface Raw {
        id: string;
        name: string;
        createdTimestamp?: unknown;
    }
}
