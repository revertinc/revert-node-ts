/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Company: core.serialization.ObjectSchema<serializers.common.Company.Raw, Revert.common.Company> =
    core.serialization
        .object({
            name: core.serialization.string(),
            industry: core.serialization.string(),
            description: core.serialization.string(),
            annualRevenue: core.serialization.number(),
            size: core.serialization.number(),
            phone: core.serialization.string(),
            address: core.serialization.lazyObject(async () => (await import("../../../../..")).common.CompanyAddress),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields));

export declare namespace Company {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw {
        name: string;
        industry: string;
        description: string;
        annualRevenue: number;
        size: number;
        phone: string;
        address: serializers.common.CompanyAddress.Raw;
    }
}
