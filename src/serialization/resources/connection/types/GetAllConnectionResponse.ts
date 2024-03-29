/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const GetAllConnectionResponse: core.serialization.Schema<
    serializers.GetAllConnectionResponse.Raw,
    Revert.GetAllConnectionResponse
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).common.Connection));

export declare namespace GetAllConnectionResponse {
    type Raw = serializers.common.Connection.Raw[];
}
