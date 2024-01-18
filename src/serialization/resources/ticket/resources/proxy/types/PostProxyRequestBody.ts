/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as RevertRevertApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const PostProxyRequestBody: core.serialization.ObjectSchema<
    serializers.ticket.PostProxyRequestBody.Raw,
    RevertRevertApi.ticket.PostProxyRequestBody
> = core.serialization.object({
    path: core.serialization.string(),
    body: core.serialization.unknown().optional(),
    method: core.serialization.string(),
    queryParams: core.serialization.unknown().optional(),
});

export declare namespace PostProxyRequestBody {
    interface Raw {
        path: string;
        body?: unknown | null;
        method: string;
        queryParams?: unknown | null;
    }
}
