/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import * as RevertRevertApi from "../../../../../../../../api";
import * as core from "../../../../../../../../core";

export const MappableFieldType: core.serialization.ObjectSchema<
    serializers.crm.fieldMapping.MappableFieldType.Raw,
    RevertRevertApi.crm.fieldMapping.MappableFieldType
> = core.serialization.object({
    fieldName: core.serialization.string(),
    objectName: core.serialization.lazy(async () => (await import("../../../../../../..")).common.StandardObject),
});

export declare namespace MappableFieldType {
    interface Raw {
        fieldName: string;
        objectName: serializers.common.StandardObject.Raw;
    }
}
