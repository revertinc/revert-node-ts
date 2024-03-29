/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Revert from "../../../../../../api";
import * as core from "../../../../../../core";

export const Tpid: core.serialization.Schema<serializers.common.Tpid.Raw, Revert.common.Tpid> =
    core.serialization.enum_(["hubspot", "zohocrm", "sfdc", "pipedrive", "slack", "closecrm", "ms_dynamics_365_sales"]);

export declare namespace Tpid {
    type Raw = "hubspot" | "zohocrm" | "sfdc" | "pipedrive" | "slack" | "closecrm" | "ms_dynamics_365_sales";
}
