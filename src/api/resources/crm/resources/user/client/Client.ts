/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Revert from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace User {
    interface Options {
        environment?: core.Supplier<environments.RevertEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class User {
    constructor(protected readonly _options: User.Options = {}) {}

    /**
     * Get details of a user
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getUser(
        id: string,
        request: Revert.crm.GetUserRequest,
        requestOptions?: User.RequestOptions
    ): Promise<Revert.crm.GetUserResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/crm/users/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.655",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.GetUserResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Revert.common.UnAuthorizedError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Revert.common.InternalServerError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Revert.common.NotFoundError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RevertError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RevertError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RevertTimeoutError();
            case "unknown":
                throw new errors.RevertError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get all the users
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getUsers(
        request: Revert.crm.GetUsersRequest,
        requestOptions?: User.RequestOptions
    ): Promise<Revert.crm.GetUsersResponse> {
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
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                "/crm/users"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.655",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.GetUsersResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Revert.common.UnAuthorizedError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Revert.common.InternalServerError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Revert.common.NotFoundError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RevertError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RevertError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RevertTimeoutError();
            case "unknown":
                throw new errors.RevertError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new user
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async createUser(
        request: Revert.crm.CreateUserRequest,
        requestOptions?: User.RequestOptions
    ): Promise<Revert.crm.CreateOrUpdateUserResponse> {
        const { xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                "/crm/users"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.655",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            body: await serializers.crm.CreateOrUpdateUserRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.CreateOrUpdateUserResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Revert.common.UnAuthorizedError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Revert.common.InternalServerError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Revert.common.NotFoundError(
                        await serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.RevertError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RevertError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RevertTimeoutError();
            case "unknown":
                throw new errors.RevertError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
