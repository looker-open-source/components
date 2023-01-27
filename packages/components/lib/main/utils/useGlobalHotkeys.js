"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGlobalHotkeys = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _getCurrentNode = require("./getCurrentNode");

var keyCommandCollection = {};
var getCommandGroup = function getCommandGroup(keyCommand) {
  var commandGroup = keyCommandCollection[keyCommand] || [];
  if (!keyCommandCollection[keyCommand]) {
    keyCommandCollection[keyCommand] = commandGroup;
  }
  return commandGroup;
};
var addCommand = function addCommand(keyCommand, cb, target) {
  var commandGroup = getCommandGroup(keyCommand);
  commandGroup.push({
    cb: cb,
    target: target
  });
};
var removeCommand = function removeCommand(keyCommand, target) {
  var commandGroup = getCommandGroup(keyCommand);
  var index = commandGroup.findIndex(function (command) {
    return command.target === target;
  });
  commandGroup.splice(index, 1);
};

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

var organizeKeyCommands = function organizeKeyCommands(keyCommand) {
  var commandGroup = (0, _toConsumableArray2["default"])(getCommandGroup(keyCommand));

  commandGroup.sort(function (ev1, ev2) {
    var rect1 = ev1.target.getBoundingClientRect();
    var rect2 = ev2.target.getBoundingClientRect();
    if (!doRectsIntersect(rect1, rect2)) {
      if (ev1.target.contains(document.activeElement)) {
        return -1;
      }
      if (ev2.target.contains(document.activeElement)) {
        return 1;
      }
      return 0;
    } else {
      var _calculateIntersectio2 = calculateIntersectionPoint(rect1, rect2),
        x = _calculateIntersectio2.x,
        y = _calculateIntersectio2.y;
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

var useGlobalHotkeys = function useGlobalHotkeys(keyCommand, cb, elementOrRef) {
  (0, _react.useEffect)(function () {
    var target = (0, _getCurrentNode.getCurrentNode)(elementOrRef);
    var handleKeydown = function handleKeydown(e) {
      if (e.key === keyCommand) {
        var _orderedCommands$;
        var orderedCommands = organizeKeyCommands(keyCommand);
        if (((_orderedCommands$ = orderedCommands[0]) === null || _orderedCommands$ === void 0 ? void 0 : _orderedCommands$.target) === target) {
          orderedCommands[0].cb();
        }
      }
    };
    if (target) {
      addCommand(keyCommand, cb, target);
      document.addEventListener('keydown', handleKeydown);
    }
    return function () {
      removeCommand(keyCommand, target);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [keyCommand, cb, elementOrRef]);
};
exports.useGlobalHotkeys = useGlobalHotkeys;
//# sourceMappingURL=useGlobalHotkeys.js.map