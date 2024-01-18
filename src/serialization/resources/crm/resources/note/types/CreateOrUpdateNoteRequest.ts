/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateNoteRequest: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateNoteRequest.Raw,
    Revert.crm.CreateOrUpdateNoteRequest
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.NoteWrite));

export declare namespace CreateOrUpdateNoteRequest {
    interface Raw extends serializers.common.NoteWrite.Raw {}
}
