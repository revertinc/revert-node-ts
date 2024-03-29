/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Message: core.serialization.ObjectSchema<serializers.common.Message.Raw, Revert.common.Message> =
    core.serialization.object({
        text: core.serialization.string(),
        channelId: core.serialization.string(),
    });

export declare namespace Message {
    interface Raw {
        text: string;
        channelId: string;
    }
}
