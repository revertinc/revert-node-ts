/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Vellum from "../../../../../../api";
import * as core from "../../../../../../core";

export const Contact: core.serialization.ObjectSchema<serializers.common.Contact.Raw, Vellum.common.Contact> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.ContactWrite));

export declare namespace Contact {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.ContactWrite.Raw {}
}
