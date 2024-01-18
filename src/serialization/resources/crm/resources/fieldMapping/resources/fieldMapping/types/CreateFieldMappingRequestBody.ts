/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as RevertRevertApi from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const CreateFieldMappingRequestBody: core.serialization.ObjectSchema<
    serializers.crm.fieldMapping.CreateFieldMappingRequestBody.Raw,
    RevertRevertApi.crm.fieldMapping.CreateFieldMappingRequestBody
> = core.serialization.object({
    standardMappings: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../../../..")).crm.fieldMapping.FieldMappingType
        )
    ),
    customMappings: core.serialization.list(
        core.serialization.lazyObject(
            async () => (await import("../../../../../../..")).crm.fieldMapping.FieldMappingType
        )
    ),
});

export declare namespace CreateFieldMappingRequestBody {
    interface Raw {
        standardMappings: serializers.crm.fieldMapping.FieldMappingType.Raw[];
        customMappings: serializers.crm.fieldMapping.FieldMappingType.Raw[];
    }
}
