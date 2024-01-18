/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as RevertRevertApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Telemetry {
    interface Options {
        environment?: core.Supplier<environments.RevertRevertApiEnvironment | string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Telemetry {
    constructor(protected readonly _options: Telemetry.Options = {}) {}

    /**
     * Create telemetry entry for a deployment
     * @throws {@link RevertRevertApi.common.UnAuthorizedError}
     * @throws {@link RevertRevertApi.common.InternalServerError}
     */
    public async createTelemetryEntry(
        request: RevertRevertApi.internal.CreateTelemetryEntryRequest,
        requestOptions?: Telemetry.RequestOptions
    ): Promise<RevertRevertApi.internal.CreateTelemetryEntryResponse> {
        const { xRevertApiToken, ..._body } = request;
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.RevertRevertApiEnvironment.Production,
                "/internal/telemetry"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "imdb",
                "X-Fern-SDK-Version": "0.0.577",
                "x-revert-api-token": xRevertApiToken,
            },
            contentType: "application/json",
            body: await serializers.internal.CreateTelemetryEntryRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.internal.CreateTelemetryEntryResponse.parseOrThrow(_response.body, {
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