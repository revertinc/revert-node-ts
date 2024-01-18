/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as RevertRevertApi from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Channels {
    interface Options {
        environment?: core.Supplier<environments.RevertRevertApiEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Channels {
    constructor(protected readonly _options: Channels.Options = {}) {}

    /**
     * Get all the channels
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async getChannels(
        request: RevertRevertApi.chat.GetChannelsRequest,
        requestOptions?: Channels.RequestOptions
    ): Promise<RevertRevertApi.chat.GetChannelsResponse> {
        const { fields, pageSize, cursor, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize;
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                "/chat/channels"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.587",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.chat.GetChannelsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new RevertRevertApi.common.UnAuthorizedError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new RevertRevertApi.common.InternalServerError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new RevertRevertApi.common.NotFoundError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RevertRevertApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RevertRevertApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RevertRevertApiTimeoutError();
            case "unknown":
                throw new errors.RevertRevertApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
