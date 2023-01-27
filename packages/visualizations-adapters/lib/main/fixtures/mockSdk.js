"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSDK = void 0;
var _ = require("./");

var mockSDK = {
  color_collection: function color_collection() {
    return Promise.resolve({
      ok: true,
      value: _.mockSdkColorCollectionResponse
    });
  },
  create_query: function create_query() {
    return Promise.resolve({
      ok: true,
      value: {
        id: 126,
        vis_config: _.mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders'
      }
    });
  },
  dashboard: function dashboard() {
    return Promise.resolve({
      ok: true,
      value: {
        dashboard_elements: [{
          query: {
            id: 126,
            vis_config: _.mockSdkConfigResponse,
            model: 'thelook',
            view: 'orders'
          }
        }]
      }
    });
  },
  lookml_model_explore: function lookml_model_explore() {
    return Promise.resolve({
      ok: true,
      value: _.mockSDKModelExploreResponse
    });
  },
  query_for_slug: function query_for_slug() {
    return Promise.resolve({
      ok: true,
      value: {
        id: 126,
        vis_config: _.mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders'
      }
    });
  },
  run_query: function run_query() {
    return Promise.resolve({
      ok: true,
      error: null,
      value: {
        data: _.mockSdkDataResponse,
        fields: _.mockSdkFieldsResponse
      }
    });
  },
  query: function query() {
    return Promise.resolve({
      ok: true,
      value: {
        vis_config: _.mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders'
      }
    });
  }
};
exports.mockSDK = mockSDK;
//# sourceMappingURL=mockSdk.js.map