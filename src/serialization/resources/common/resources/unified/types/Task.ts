/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Task: core.serialization.ObjectSchema<serializers.common.Task.Raw, Revert.common.Task> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.CommonUnifiedFields))
    .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).common.TaskRead));

export declare namespace Task {
    interface Raw extends serializers.common.CommonUnifiedFields.Raw, serializers.common.TaskRead.Raw {}
}
