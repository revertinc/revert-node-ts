/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Revert from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Task {
    interface Options {
        environment?: core.Supplier<environments.RevertEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Task {
    constructor(protected readonly _options: Task.Options = {}) {}

    /**
     * Get details of a task
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getTask(
        id: string,
        request: Revert.crm.GetTaskRequest,
        requestOptions?: Task.RequestOptions
    ): Promise<Revert.crm.GetTaskResponse> {
        const { fields, associations, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        if (associations != null) {
            _queryParams["associations"] = associations;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/crm/tasks/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.1068",
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
            return await serializers.crm.GetTaskResponse.parseOrThrow(_response.body, {
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
     * Get all the tasks
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getTasks(
        request: Revert.crm.GetTasksRequest,
        requestOptions?: Task.RequestOptions
    ): Promise<Revert.crm.GetTasksResponse> {
        const { fields, pageSize, cursor, associations, xRevertApiToken, xRevertTId, xApiVersion } = request;
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

        if (associations != null) {
            _queryParams["associations"] = associations;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                "/crm/tasks"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.1068",
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
            return await serializers.crm.GetTasksResponse.parseOrThrow(_response.body, {
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
     * Create a new task
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async createTask(
        request: Revert.crm.CreateTaskRequest,
        requestOptions?: Task.RequestOptions
    ): Promise<Revert.crm.CreateOrUpdateTaskResponse> {
        const { xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                "/crm/tasks"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.1068",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            body: await serializers.crm.CreateOrUpdateTaskRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.CreateOrUpdateTaskResponse.parseOrThrow(_response.body, {
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
     * Update a task
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async updateTask(
        id: string,
        request: Revert.crm.UpdateTaskRequest,
        requestOptions?: Task.RequestOptions
    ): Promise<Revert.crm.CreateOrUpdateTaskResponse> {
        const { xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/crm/tasks/${id}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.1068",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            body: await serializers.crm.CreateOrUpdateTaskRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.CreateOrUpdateTaskResponse.parseOrThrow(_response.body, {
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
     * Search for tasks
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async searchTasks(
        request: Revert.crm.SearchTasksRequest,
        requestOptions?: Task.RequestOptions
    ): Promise<Revert.crm.SearchTasksResponse> {
        const { fields, pageSize, cursor, xRevertApiToken, xRevertTId, xApiVersion, ..._body } = request;
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
                "/crm/tasks/search"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@revertdotdev/node",
                "X-Fern-SDK-Version": "0.0.1068",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.crm.SearchTasksRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.SearchTasksResponse.parseOrThrow(_response.body, {
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
