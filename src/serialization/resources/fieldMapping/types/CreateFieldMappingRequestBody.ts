/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const CreateFieldMappingRequestBody: core.serialization.ObjectSchema<
    serializers.CreateFieldMappingRequestBody.Raw,
    Revert.CreateFieldMappingRequestBody
> = core.serialization.object({
    standardMappings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).FieldMappingType)
    ),
    customMappings: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).FieldMappingType)
    ),
});

export declare namespace CreateFieldMappingRequestBody {
    interface Raw {
        standardMappings: serializers.FieldMappingType.Raw[];
        customMappings: serializers.FieldMappingType.Raw[];
    }
}