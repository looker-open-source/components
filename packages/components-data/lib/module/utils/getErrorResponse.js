

import { isErrorResponse } from '.';

export const getErrorResponse = sdkResponse => {
  const errorResponse = isErrorResponse(sdkResponse) ? sdkResponse.error : undefined;
  return errorResponse ? {
    error: errorResponse
  } : {};
};
//# sourceMappingURL=getErrorResponse.js.map