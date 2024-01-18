/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as RevertRevertApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Metadata {
    interface Options {
        environment?: core.Supplier<environments.RevertRevertApiEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Metadata {
    constructor(protected readonly _options: Metadata.Options = {}) {}

    /**
     * Retrieve a list of CRMs available for this account from the database based on the public token.
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     */
    public async getCrms(
        request: RevertRevertApi.CrmMetadataRequest,
        requestOptions?: Metadata.RequestOptions
    ): Promise<RevertRevertApi.CrmMetadataResponse> {
        const { xRevertPublicToken } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                "metadata/crms"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "sdk",
                "X-Fern-SDK-Version": "0.0.579",
                "x-revert-public-token": xRevertPublicToken,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.CrmMetadataResponse.parseOrThrow(_response.body, {
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
