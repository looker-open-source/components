"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Wrapping;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var stateOptions = [{
  label: 'Alabama',
  value: 'Alabama'
}, {
  label: 'Alaska',
  value: 'Alaska'
}, {
  label: 'Arizona',
  value: 'Arizona'
}, {
  label: 'Arkansas',
  value: 'Arkansas'
}, {
  label: 'California',
  value: 'California'
}, {
  label: 'Colorado',
  value: 'Colorado'
}, {
  label: 'Connecticut',
  value: 'Connecticut'
}, {
  label: 'Delaware',
  value: 'Delaware'
}, {
  label: 'Florida',
  value: 'Florida'
}, {
  label: 'Georgia',
  value: 'Georgia'
}, {
  label: 'Hawaii',
  value: 'Hawaii'
}, {
  label: 'Idaho',
  value: 'Idaho'
}, {
  label: 'Illinois',
  value: 'Illinois'
}, {
  label: 'Indiana',
  value: 'Indiana'
}, {
  label: 'Iowa',
  value: 'Iowa'
}, {
  label: 'Kansas',
  value: 'Kansas'
}, {
  label: 'Kentucky',
  value: 'Kentucky'
}, {
  label: 'Louisiana',
  value: 'Louisiana'
}, {
  label: 'Maine',
  value: 'Maine'
}, {
  label: 'Maryland',
  value: 'Maryland'
}, {
  label: 'Massachusetts',
  value: 'Massachusetts'
}, {
  label: 'Michigan',
  value: 'Michigan'
}, {
  label: 'Minnesota',
  value: 'Minnesota'
}, {
  label: 'Mississippi',
  value: 'Mississippi'
}, {
  label: 'Missouri',
  value: 'Missouri'
}, {
  label: 'Montana',
  value: 'Montana'
}, {
  label: 'Nebraska',
  value: 'Nebraska'
}, {
  label: 'Nevada',
  value: 'Nevada'
}, {
  label: 'New Hampshire',
  value: 'New Hampshire'
}, {
  label: 'New Jersey',
  value: 'New Jersey'
}, {
  label: 'New Mexico',
  value: 'New Mexico'
}, {
  label: 'New York',
  value: 'New York'
}, {
  label: 'North Carolina',
  value: 'North Carolina'
}, {
  label: 'North Dakota',
  value: 'North Dakota'
}, {
  label: 'Ohio',
  value: 'Ohio'
}, {
  label: 'Oklahoma',
  value: 'Oklahoma'
}, {
  label: 'Oregon',
  value: 'Oregon'
}, {
  label: 'Pennsylvania',
  value: 'Pennsylvania'
}, {
  label: 'Rhode Island',
  value: 'Rhode Island'
}, {
  label: 'South Carolina',
  value: 'South Carolina'
}, {
  label: 'South Dakota',
  value: 'South Dakota'
}, {
  label: 'Tennessee',
  value: 'Tennessee'
}, {
  label: 'Texas',
  value: 'Texas'
}, {
  label: 'Utah',
  value: 'Utah'
}, {
  label: 'Vermont',
  value: 'Vermont'
}, {
  label: 'Virginia',
  value: 'Virginia'
}, {
  label: 'Washington',
  value: 'Washington'
}, {
  label: 'West Virginia',
  value: 'West Virginia'
}, {
  label: 'Wisconsin',
  value: 'Wisconsin'
}, {
  label: 'Wyoming',
  value: 'Wyoming'
}];

function Wrapping() {
  var _useState = (0, _react.useState)([stateOptions[0].value]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return _react["default"].createElement(_.Box2, null, _react["default"].createElement(_.ButtonGroup, {
    value: value,
    onChange: setValue
  }, stateOptions.map(function (item) {
    return _react["default"].createElement(_.ButtonItem, {
      key: item.value,
      value: item.value
    }, item.label);
  }), _react["default"].createElement(_.Span, null, "Inline text")));
}
//# sourceMappingURL=Wrapping.js.map