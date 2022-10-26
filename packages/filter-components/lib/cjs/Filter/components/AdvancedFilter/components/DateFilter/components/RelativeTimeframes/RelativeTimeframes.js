"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeframes = void 0;

var _components = require("@looker/components");

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../../../../../../utils");

var _relative_timeframe_to_string = require("../../utils/relative_timeframe_to_string");

var _RelativeTimeframePopoverContent = require("./components/RelativeTimeframePopoverContent");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RelativeTimeframes = function RelativeTimeframes(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  var internalPopoverInstanceRef = (0, _react.useRef)();

  var _useTranslation = (0, _utils.useTranslation)('RelativeTimeframe'),
      t = _useTranslation.t;

  var handlePresetChange = function handlePresetChange(selected) {
    onChange(selected);
  };

  var handleCustomChange = function handleCustomChange(range) {
    onChange(range);
  };

  var handleNav = function handleNav() {
    var _internalPopoverInsta;

    (_internalPopoverInsta = internalPopoverInstanceRef.current) === null || _internalPopoverInsta === void 0 ? void 0 : _internalPopoverInsta.update();
  };

  var popoverContent = _react["default"].createElement(_RelativeTimeframePopoverContent.RelativeTimeframePopoverContent, {
    value: value,
    onNav: handleNav,
    onCustomChange: handleCustomChange,
    onPresetChange: handlePresetChange
  });

  var popoverProps = {
    content: popoverContent,
    pin: true,
    placement: 'bottom-start'
  };

  var _usePopover = (0, _components.usePopover)(popoverProps),
      popover = _usePopover.popover,
      open = _usePopover.open,
      ref = _usePopover.ref,
      popperInstanceRef = _usePopover.popperInstanceRef;

  internalPopoverInstanceRef.current = popperInstanceRef.current;
  var label = (0, _relative_timeframe_to_string.useRelativeTimeframeToString)(value);

  var overlayTrigger = _react["default"].createElement(_components.ChipButton, {
    ref: ref,
    onClick: open
  }, label);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_components.Breakpoint, {
    show: "mobile"
  }, _react["default"].createElement(_components.Dialog, {
    content: _react["default"].createElement(_components.DialogLayout, {
      header: t('Choose a Timeframe')
    }, popoverContent)
  }, overlayTrigger)), _react["default"].createElement(_components.Breakpoint, {
    show: ['tablet', undefined]
  }, popover, overlayTrigger));
};

exports.RelativeTimeframes = RelativeTimeframes;
//# sourceMappingURL=RelativeTimeframes.js.map