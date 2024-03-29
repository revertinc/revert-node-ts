/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const TaskTicketWrite: core.serialization.ObjectSchema<
    serializers.common.TaskTicketWrite.Raw,
    Revert.common.TaskTicketWrite
> = core.serialization.object({
    name: core.serialization.string(),
    assignees: core.serialization.list(core.serialization.string()),
    description: core.serialization.string(),
    status: core.serialization.lazy(async () => (await import("../../../../..")).common.TicketStatus),
    priority: core.serialization.lazy(async () => (await import("../../../../..")).common.TicketPriority),
    creatorId: core.serialization.string(),
    dueDate: core.serialization.string(),
    completedDate: core.serialization.string(),
    parentId: core.serialization.string(),
    listId: core.serialization.string(),
});

export declare namespace TaskTicketWrite {
    interface Raw {
        name: string;
        assignees: string[];
        description: string;
        status: serializers.common.TicketStatus.Raw;
        priority: serializers.common.TicketPriority.Raw;
        creatorId: string;
        dueDate: string;
        completedDate: string;
        parentId: string;
        listId: string;
    }
}
