"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrapStackProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TrapStackProvider = function TrapStackProvider(_ref) {
  var activate = _ref.activate,
      context = _ref.context,
      children = _ref.children;
  var registeredTrapsRef = (0, _react.useRef)({});
  var activeTrapRef = (0, _react.useRef)();
  var deactivateRef = (0, _react.useRef)();
  var value = (0, _react.useMemo)(function () {
    var getTrap = function getTrap(id) {
      var registeredTraps = registeredTrapsRef.current;
      return id ? registeredTraps[id] : (0, _utils.getActiveTrap)(registeredTraps);
    };

    var enableCurrentTrap = function enableCurrentTrap() {
      var newTrap = getTrap();

      if ((newTrap === null || newTrap === void 0 ? void 0 : newTrap.element) !== activeTrapRef.current) {
        var _deactivateRef$curren;

        activeTrapRef.current = newTrap === null || newTrap === void 0 ? void 0 : newTrap.element;
        (_deactivateRef$curren = deactivateRef.current) === null || _deactivateRef$curren === void 0 ? void 0 : _deactivateRef$curren.call(deactivateRef);
        deactivateRef.current = undefined;

        if (newTrap) {
          deactivateRef.current = activate(newTrap);
        }
      }
    };

    var disableCurrentTrap = function disableCurrentTrap() {
      var _deactivateRef$curren2;

      (_deactivateRef$curren2 = deactivateRef.current) === null || _deactivateRef$curren2 === void 0 ? void 0 : _deactivateRef$curren2.call(deactivateRef);
      deactivateRef.current = undefined;
      activeTrapRef.current = undefined;
    };

    var addTrap = function addTrap(id, trap) {
      registeredTrapsRef.current[id] = trap;
      enableCurrentTrap();
    };

    var removeTrap = function removeTrap(id) {
      var existingTrap = getTrap(id);

      if (existingTrap) {
        var registeredTraps = registeredTrapsRef.current;
        delete registeredTraps[id];
        enableCurrentTrap();
      }
    };

    return {
      activeTrapRef: activeTrapRef,
      addTrap: addTrap,
      disableCurrentTrap: disableCurrentTrap,
      enableCurrentTrap: enableCurrentTrap,
      getTrap: getTrap,
      removeTrap: removeTrap
    };
  }, [activate]);
  return _react["default"].createElement(context.Provider, {
    value: value
  }, children);
};

exports.TrapStackProvider = TrapStackProvider;
//# sourceMappingURL=TrapStackProvider.js.map