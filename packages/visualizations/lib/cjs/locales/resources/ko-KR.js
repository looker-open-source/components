"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koKR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': '쿼리 구성 요소에 전달된 하위 항목 없음',
    'Query component received both dashboard and query props': '쿼리 구성 요소에 대시보드와 쿼리 속성이 둘 다 수신됨'
  },
  QueryError: {
    Error: '오류'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "현재 '날짜' 유형의 Measure는 지원되지 않음",
    'No chart found for type "{{type}}"': '유형 "{{type}}"의 차트를 찾을 수 없음'
  }
};
var koKR = {
  locale: 'ko-KR',
  resources: {
    'ko-KR': (0, _merge["default"])({}, resources, _visualizationsAdapters.koKR.resources['ko-KR'], _visualizationsTable.koKR.resources['ko-KR'], _visualizationsVisx.koKR.resources['ko-KR'])
  }
};
exports.koKR = koKR;
//# sourceMappingURL=ko-KR.js.map