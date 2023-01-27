"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Debug = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _StaticTable = require("../StaticTable");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _utils = require("../utils");
var _KeyValueList = require("../KeyValueList");

var Debug = function Debug(_ref) {
  var ok = _ref.ok,
    data = _ref.data,
    error = _ref.error,
    _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config,
    fields = _ref.fields;
  var _useTranslation = (0, _utils.useTranslation)('Debug'),
    t = _useTranslation.t;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_KeyValueList.KeyValueList, {
    value: {
      response: ok ? t('ok') : t('error')
    }
  }), !(0, _isEmpty["default"])(error) && _react["default"].createElement(_components.Accordion2, {
    indicatorPosition: "left",
    defaultOpen: true,
    label: t('Error')
  }, _react["default"].createElement(_KeyValueList.KeyValueList, {
    value: error || {}
  })), !(0, _isEmpty["default"])(config) && _react["default"].createElement(_components.Accordion2, {
    indicatorPosition: "left",
    label: t('Config')
  }, _react["default"].createElement(_KeyValueList.KeyValueList, {
    value: config
  })), !(0, _isEmpty["default"])(fields) && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.Accordion2, {
    indicatorPosition: "left",
    label: t('Dimensions')
  }, _react["default"].createElement(_KeyValueList.KeyValueList, {
    value: (fields === null || fields === void 0 ? void 0 : fields.dimensions) || {}
  })), _react["default"].createElement(_components.Accordion2, {
    indicatorPosition: "left",
    label: t('Measures')
  }, _react["default"].createElement(_KeyValueList.KeyValueList, {
    value: (fields === null || fields === void 0 ? void 0 : fields.measures) || {}
  }))), data && _react["default"].createElement(_components.Accordion2, {
    indicatorPosition: "left",
    defaultOpen: true,
    label: t('Result')
  }, _react["default"].createElement(_StaticTable.StaticTable, {
    data: data,
    fields: fields
  })));
};
exports.Debug = Debug;
//# sourceMappingURL=Debug.js.map