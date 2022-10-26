import type { IError } from '@looker/sdk';
import type { SDKResponse } from '@looker/sdk-rtl';
export declare const getErrorResponse: (sdkResponse?: void | SDKResponse<any, IError> | undefined) => {
    error: IError;
} | {
    error?: undefined;
};
