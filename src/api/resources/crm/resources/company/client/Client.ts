/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as RevertRevertApi from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Company {
    interface Options {
        environment?: core.Supplier<environments.RevertRevertApiEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Company {
    constructor(protected readonly _options: Company.Options = {}) {}

    /**
     * Get details of a company
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async getCompany(
        id: string,
        request: RevertRevertApi.crm.GetCompanyRequest,
        requestOptions?: Company.RequestOptions
    ): Promise<RevertRevertApi.crm.GetCompanyResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                `/crm/companies/${id}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
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
            return await serializers.crm.GetCompanyResponse.parseOrThrow(_response.body, {
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

    /**
     * Get all the companies
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async getCompanies(
        request: RevertRevertApi.crm.GetCompaniesRequest,
        requestOptions?: Company.RequestOptions
    ): Promise<RevertRevertApi.crm.GetCompaniesResponse> {
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
                "/crm/companies"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
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
            return await serializers.crm.GetCompaniesResponse.parseOrThrow(_response.body, {
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

    /**
     * Create a new company
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async createCompany(
        request: RevertRevertApi.crm.CreateCompanyRequest,
        requestOptions?: Company.RequestOptions
    ): Promise<RevertRevertApi.crm.CreateOrUpdateCompanyResponse> {
        const { xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                "/crm/companies"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            body: await serializers.crm.CreateOrUpdateCompanyRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.CreateOrUpdateCompanyResponse.parseOrThrow(_response.body, {
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

    /**
     * Update a company
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async updateCompany(
        id: string,
        request: RevertRevertApi.crm.UpdateCompanyRequest,
        requestOptions?: Company.RequestOptions
    ): Promise<RevertRevertApi.crm.CreateOrUpdateCompanyResponse> {
        const { xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                `/crm/companies/${id}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            body: await serializers.common.Company.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.CreateOrUpdateCompanyResponse.parseOrThrow(_response.body, {
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

    /**
     * Search for companies
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     * @throws {@link RevertRevertApi.common.NotFoundError}
     */
    public async searchCompanies(
        request: RevertRevertApi.crm.SearchCompaniesRequest,
        requestOptions?: Company.RequestOptions
    ): Promise<RevertRevertApi.crm.SearchCompaniesResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                "/crm/companies/search"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
                "x-revert-api-token": xRevertApiToken,
                "x-revert-t-id": xRevertTId,
                "x-api-version": xApiVersion != null ? xApiVersion : undefined,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.crm.SearchCompaniesRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.crm.SearchCompaniesResponse.parseOrThrow(_response.body, {
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