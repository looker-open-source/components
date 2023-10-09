"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUpdateListRefs = void 0;
var _react = require("react");
var _utils = require("../../../../utils");
var _ComboboxContext = require("../ComboboxContext");
var useUpdateListRefs = function useUpdateListRefs(_ref) {
  var _ref$persistSelection = _ref.persistSelection,
    persistSelection = _ref$persistSelection === void 0 ? false : _ref$persistSelection,
    _ref$closeOnSelect = _ref.closeOnSelect,
    closeOnSelect = _ref$closeOnSelect === void 0 ? true : _ref$closeOnSelect,
    _ref$windowing = _ref.windowing,
    windowing = _ref$windowing === void 0 ? false : _ref$windowing,
    indicator = _ref.indicator,
    isMulti = _ref.isMulti;
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = isMulti ? contextMulti : context;
  var persistSelectionPropRef = contextToUse.persistSelectionPropRef,
    closeOnSelectPropRef = contextToUse.closeOnSelectPropRef,
    windowingPropRef = contextToUse.windowingPropRef,
    indicatorPropRef = contextToUse.indicatorPropRef,
    isVisible = contextToUse.isVisible,
    optionsRef = contextToUse.optionsRef;
  if (persistSelectionPropRef) persistSelectionPropRef.current = persistSelection;
  if (closeOnSelectPropRef) closeOnSelectPropRef.current = closeOnSelect;
  if (indicatorPropRef) indicatorPropRef.current = indicator;
  (0, _utils.useSafeLayoutEffect)(function () {
    if (windowingPropRef) windowingPropRef.current = windowing;
    if (optionsRef) optionsRef.current = [];
    return function () {
      if (optionsRef) optionsRef.current = [];
    };
  }, [optionsRef, isVisible, windowing, windowingPropRef]);
};
exports.useUpdateListRefs = useUpdateListRefs;
//# sourceMappingURL=useUpdateListRefs.js.map