/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const User: core.serialization.ObjectSchema<serializers.common.User.Raw, Vellum.common.User> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.UserWrite));

export declare namespace User {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.UserWrite.Raw {}
}
