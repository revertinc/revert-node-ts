/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Revert from "../../../../api";
import * as core from "../../../../core";

export const CreateAccountFieldMappingRequestBody: core.serialization.ObjectSchema<
    serializers.CreateAccountFieldMappingRequestBody.Raw,
    Revert.CreateAccountFieldMappingRequestBody
> = core.serialization.object({
    allowConnectionOverrideCustomFields: core.serialization.property(
        "allow_connection_override_custom_fields",
        core.serialization.boolean()
    ),
    mappableByConnectionFieldList: core.serialization.property(
        "mappable_by_connection_field_list",
        core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).MappableFieldType))
    ),
});

export declare namespace CreateAccountFieldMappingRequestBody {
    interface Raw {
        allow_connection_override_custom_fields: boolean;
        mappable_by_connection_field_list: serializers.MappableFieldType.Raw[];
    }
}
