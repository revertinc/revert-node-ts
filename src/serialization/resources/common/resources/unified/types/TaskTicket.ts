/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const TaskTicket: core.serialization.ObjectSchema<serializers.common.TaskTicket.Raw, Revert.common.TaskTicket> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.TaskTicketWrite));

export declare namespace TaskTicket {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.TaskTicketWrite.Raw {}
}
