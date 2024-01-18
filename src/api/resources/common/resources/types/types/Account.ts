/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as RevertRevertApi from "../../../../..";

export interface Account {
    id: string;
    tenantCount: number;
    privateToken: string;
    publicToken: string;
    domain: string;
    skipWaitlist: boolean;
    users?: RevertRevertApi.common.RevertUser[];
    apps?: RevertRevertApi.common.App[];
}
