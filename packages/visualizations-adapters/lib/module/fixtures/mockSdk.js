

import { mockSdkConfigResponse, mockSdkFieldsResponse, mockSdkDataResponse, mockSDKModelExploreResponse, mockSdkColorCollectionResponse } from './';

export const mockSDK = {
  color_collection: () => Promise.resolve({
    ok: true,
    value: mockSdkColorCollectionResponse
  }),
  create_query: () => Promise.resolve({
    ok: true,
    value: {
      id: 126,
      vis_config: mockSdkConfigResponse,
      model: 'thelook',
      view: 'orders'
    }
  }),
  dashboard: () => Promise.resolve({
    ok: true,
    value: {
      dashboard_elements: [{
        query: {
          id: 126,
          vis_config: mockSdkConfigResponse,
          model: 'thelook',
          view: 'orders'
        }
      }]
    }
  }),
  lookml_model_explore: () => Promise.resolve({
    ok: true,
    value: mockSDKModelExploreResponse
  }),
  query_for_slug: () => Promise.resolve({
    ok: true,
    value: {
      id: 126,
      vis_config: mockSdkConfigResponse,
      model: 'thelook',
      view: 'orders'
    }
  }),
  run_query: () => Promise.resolve({
    ok: true,
    error: null,
    value: {
      data: mockSdkDataResponse,
      fields: mockSdkFieldsResponse
    }
  }),
  query: () => Promise.resolve({
    ok: true,
    value: {
      vis_config: mockSdkConfigResponse,
      model: 'thelook',
      view: 'orders'
    }
  })
};
//# sourceMappingURL=mockSdk.js.map