/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Revert from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Offer {
    interface Options {
        environment?: core.Supplier<environments.RevertEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Offer {
    constructor(protected readonly _options: Offer.Options = {}) {}

    /**
     * Get details of a offer.
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getOffer(
        id: string,
        request: Revert.ats.GetOfferRequest,
        requestOptions?: Offer.RequestOptions
    ): Promise<Revert.ats.GetOfferResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/ats/offers/${id}`
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
            return await serializers.ats.GetOfferResponse.parseOrThrow(_response.body, {
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
     * Get all the offers.
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async getOffers(
        request: Revert.ats.GetOffersRequest,
        requestOptions?: Offer.RequestOptions
    ): Promise<Revert.ats.GetOffersResponse> {
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
                "/ats/offers"
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
            return await serializers.ats.GetOffersResponse.parseOrThrow(_response.body, {
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
     * Create a new Offer
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async createOffer(
        request: Revert.ats.CreateOfferRequest,
        requestOptions?: Offer.RequestOptions
    ): Promise<Revert.ats.CreateOrUpdateOfferResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                "/ats/offers"
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
            body: await serializers.ats.CreateOrUpdateOfferRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ats.CreateOrUpdateOfferResponse.parseOrThrow(_response.body, {
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
     * Update a Offer
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async updateOffer(
        id: string,
        request: Revert.ats.UpdateOfferRequest,
        requestOptions?: Offer.RequestOptions
    ): Promise<Revert.ats.CreateOrUpdateOfferResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion, body: _body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/ats/offers/${id}`
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
            queryParameters: _queryParams,
            body: await serializers.ats.CreateOrUpdateOfferRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ats.CreateOrUpdateOfferResponse.parseOrThrow(_response.body, {
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
     * Delete details of an Offer
     * @throws {@link Revert.common.UnAuthorizedError}
     * @throws {@link Revert.common.InternalServerError}
     * @throws {@link Revert.common.NotFoundError}
     */
    public async deleteOffer(
        id: string,
        request: Revert.ats.DeleteOfferRequest,
        requestOptions?: Offer.RequestOptions
    ): Promise<Revert.ats.DeleteOfferResponse> {
        const { fields, xRevertApiToken, xRevertTId, xApiVersion } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (fields != null) {
            _queryParams["fields"] = fields;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.RevertEnvironment.Production,
                `/ats/offers/${id}`
            ),
            method: "DELETE",
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
            return await serializers.ats.DeleteOfferResponse.parseOrThrow(_response.body, {
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
