/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const CreateOrUpdateCompanyRequest: core.serialization.ObjectSchema<
    serializers.crm.CreateOrUpdateCompanyRequest.Raw,
    Revert.crm.CreateOrUpdateCompanyRequest
> = core.serialization
    .object({
        associations: core.serialization
            .lazyObject(async () => (await import("../../../../..")).common.CompanyAssociation)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.Company));

export declare namespace CreateOrUpdateCompanyRequest {
    interface Raw extends serializers.common.Company.Raw {
        associations?: serializers.common.CompanyAssociation.Raw | null;
    }
}
