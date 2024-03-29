/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Note: core.serialization.ObjectSchema<serializers.common.Note.Raw, Revert.common.Note> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.NoteRead));

export declare namespace Note {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.NoteRead.Raw {}
}
