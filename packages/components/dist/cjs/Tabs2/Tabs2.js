"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs2 = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Tab = require("./Tab2");
var _TabList = require("./TabList2");
var _TabPanels = require("./TabPanels2");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getTabsData = function getTabsData(children) {
  return _react.Children.map(children, function (child) {
    return {
      children: child.props.children,
      disabled: child.props.disabled,
      id: child.props.id || child.props.label,
      label: child.props.label
    };
  });
};
var getFallbackTabId = function getFallbackTabId(enabledTabIds, intendedTabId) {
  var enabledTabIdsArr = JSON.parse(enabledTabIds);
  if (enabledTabIds.length === 0) return undefined;
  if (intendedTabId && enabledTabIdsArr.includes(intendedTabId)) return intendedTabId;
  return enabledTabIdsArr[0];
};
var Tabs2 = function Tabs2(_ref) {
  var children = _ref.children,
    onTabChange = _ref.onTabChange,
    defaultTabId = _ref.defaultTabId,
    _ref$distributed = _ref.distributed,
    distributed = _ref$distributed === void 0 ? false : _ref$distributed,
    propsTabId = _ref.tabId;
  var initialTabs = getTabsData(children);
  var _useState = (0, _react.useState)(initialTabs),
    _useState2 = _slicedToArray(_useState, 2),
    tabs = _useState2[0],
    setTabs = _useState2[1];
  var enabledTabIds = JSON.stringify(tabs.reduce(function (acc, tab) {
    return tab.disabled ? acc : [].concat(_toConsumableArray(acc), [tab.id]);
  }, []));
  var _useState3 = (0, _react.useState)(getFallbackTabId(enabledTabIds, defaultTabId)),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTabId = _useState4[0],
    setCurrentTabId = _useState4[1];
  var tabId = propsTabId || currentTabId;
  (0, _react.useEffect)(function () {
    setTabs(getTabsData(children));
  }, [children]);
  (0, _react.useEffect)(function () {
    var fallbackTabId = getFallbackTabId(enabledTabIds, currentTabId);
    if (fallbackTabId !== currentTabId) {
      setCurrentTabId(fallbackTabId);
    }
  }, [currentTabId, enabledTabIds]);
  var handleTabChange = function handleTabChange(draftId) {
    return onTabChange ? onTabChange(draftId) : setCurrentTabId(draftId);
  };
  var labels = tabs.map(function (_ref2, index) {
    var disabled = _ref2.disabled,
      label = _ref2.label,
      id = _ref2.id;
    return _react["default"].createElement(_Tab.Tab2, {
      disabled: disabled,
      label: label,
      key: index,
      id: id,
      selected: id === tabId,
      onSelect: function onSelect() {
        return handleTabChange(id || label);
      }
    }, label);
  });
  var currentTab = tabs.find(function (tab) {
    return tab.id === tabId;
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TabList.TabList2, {
    distribute: distributed
  }, labels), currentTab && _react["default"].createElement(_TabPanels.TabPanels2, {
    id: currentTab.id
  }, currentTab.children));
};
exports.Tabs2 = Tabs2;
//# sourceMappingURL=Tabs2.js.map