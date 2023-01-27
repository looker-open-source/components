

import { mockFields, mockSdkConfigResponse, mockSdkDataResponse } from '../fixtures';
import { KEYS_TO_REMOVE, sanitizeSDKResponse } from './sanitizeSDKResponse';
describe('sanitizeSDKResponse', () => {
  test('removes appropriate properties from config object', () => {
    const transformedConfig = sanitizeSDKResponse({
      config: mockSdkConfigResponse,
      data: mockSdkDataResponse,
      fields: mockFields
    });

    KEYS_TO_REMOVE.forEach(key => expect(transformedConfig).not.toHaveProperty(key));
  });
});
//# sourceMappingURL=sanitizeSDKResponse.spec.js.map