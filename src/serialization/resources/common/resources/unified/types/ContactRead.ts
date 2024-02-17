/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const ContactRead: core.serialization.ObjectSchema<
    serializers.common.ContactRead.Raw,
    Revert.common.ContactRead
> = core.serialization.object({
    firstName: core.serialization.string(),
    lastName: core.serialization.string(),
    phone: core.serialization.string(),
    email: core.serialization.string(),
});

export declare namespace ContactRead {
    interface Raw {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
    }
}
