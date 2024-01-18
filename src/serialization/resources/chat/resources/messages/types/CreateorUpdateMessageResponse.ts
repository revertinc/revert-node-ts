/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateorUpdateMessageResponse: core.serialization.ObjectSchema<
    serializers.chat.CreateorUpdateMessageResponse.Raw,
    Revert.chat.CreateorUpdateMessageResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.ResponseStatus),
    result: core.serialization.lazyObject(async () => (await import("../../../../..")).common.Message),
});

export declare namespace CreateorUpdateMessageResponse {
    interface Raw {
        status: serializers.common.ResponseStatus.Raw;
        result: serializers.common.Message.Raw;
    }
}
