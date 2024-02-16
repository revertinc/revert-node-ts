/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Revert from "../../../../..";

export interface App {
    id: string;
    tpId: Revert.common.Tpid;
    scope?: string[];
    appClientId?: string;
    appClientSecret?: string;
    ownerAccountPublicToken: string;
    account?: Revert.common.Account;
    connections?: Revert.common.Connection[];
    isRevertApp: boolean;
    appConfig?: Revert.common.AppConfig;
}
