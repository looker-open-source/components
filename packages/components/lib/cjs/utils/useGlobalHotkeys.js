"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGlobalHotkeys = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reactHotkeysHook = require("react-hotkeys-hook");

var _get = _interopRequireDefault(require("lodash/get"));

var _filter = _interopRequireDefault(require("lodash/filter"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var keyCommandCollection = {};

var doRectsIntersect = function doRectsIntersect(r1, r2) {
  return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
};

var calculateIntersectionPoint = function calculateIntersectionPoint(r1, r2) {
  var y = Math.max(r2.top, r1.top);
  var x = Math.max(r1.left, r2.left);
  return {
    x: x,
    y: y
  };
};

var organizeKeyCommands = function organizeKeyCommands(shortcut) {
  var commandGroup = (0, _toConsumableArray2["default"])((0, _get["default"])(keyCommandCollection, shortcut, []));
  commandGroup.sort(function (ev1, ev2) {
    var rect1 = ev1.target.getBoundingClientRect();
    var rect2 = ev2.target.getBoundingClientRect();

    if (!doRectsIntersect(rect1, rect2)) {
      return 0;
    } else {
      var _calculateIntersectio = calculateIntersectionPoint(rect1, rect2),
          x = _calculateIntersectio.x,
          y = _calculateIntersectio.y;

      var stackedElements = document.elementsFromPoint(x, y);
      var idx1 = stackedElements.findIndex(function (el) {
        return el === ev1.target;
      });
      var idx2 = stackedElements.findIndex(function (el) {
        return el === ev2.target;
      });
      return idx1 > idx2 ? 1 : -1;
    }
  });
  return commandGroup;
};

var executeFirstKeyCommand = (0, _debounce["default"])(function (e, cbStack) {
  cbStack[0] && cbStack[0].cb(e);
}, 50);

var discardStaleCommands = function discardStaleCommands(keyCommand) {
  var commandSet = keyCommandCollection[keyCommand];
  keyCommandCollection[keyCommand] = new Set((0, _filter["default"])((0, _toConsumableArray2["default"])(commandSet), function (event) {
    return document.body.contains(event.target);
  }));
};

var useGlobalHotkeys = function useGlobalHotkeys(keyCommand, cb, containerRef) {
  if (containerRef.current) {
    var newCommand = {
      cb: cb,
      target: containerRef.current
    };
    var commandSet = (0, _get["default"])(keyCommandCollection, keyCommand, new Set());
    commandSet.add(newCommand);
    keyCommandCollection[keyCommand] = commandSet;
  }

  var wrappedCb = function wrappedCb(e, handler) {
    discardStaleCommands(handler.shortcut);
    var orderedEventListeners = organizeKeyCommands(handler.shortcut);
    executeFirstKeyCommand(e, orderedEventListeners);
  };

  (0, _reactHotkeysHook.useHotkeys)(keyCommand, wrappedCb, {
    filter: function filter() {
      return true;
    }
  });
};

exports.useGlobalHotkeys = useGlobalHotkeys;
//# sourceMappingURL=useGlobalHotkeys.js.map