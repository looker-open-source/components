"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGlobalHotkeys = void 0;
var _react = require("react");
var _getCurrentNode = require("./getCurrentNode");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  var commandGroup = _toConsumableArray(getCommandGroup(keyCommand));
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
function getKeys(keys) {
  var keysArray = keys.split('+');
  var keyCommand = keysArray.at(-1) || '';
  var firstKey = keysArray[0].toLowerCase();
  var metaKeyRequired = ['cmd', 'ctl', 'ctrl'].includes(firstKey);
  return {
    keyCommand: keyCommand,
    metaKeyRequired: metaKeyRequired
  };
}
var useGlobalHotkeys = function useGlobalHotkeys(keys, cb, elementOrRef) {
  var _getKeys = getKeys(keys),
    keyCommand = _getKeys.keyCommand,
    metaKeyRequired = _getKeys.metaKeyRequired;
  (0, _react.useEffect)(function () {
    var target = (0, _getCurrentNode.getCurrentNode)(elementOrRef);
    var handleKeydown = function handleKeydown(e) {
      var metaKeySatisfied = metaKeyRequired ? e.metaKey || e.ctrlKey : true;
      if (e.key === keyCommand && metaKeySatisfied) {
        var _orderedCommands$;
        var orderedCommands = organizeKeyCommands(keyCommand);
        if (((_orderedCommands$ = orderedCommands[0]) === null || _orderedCommands$ === void 0 ? void 0 : _orderedCommands$.target) === target) {
          orderedCommands[0].cb(e);
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
  }, [keyCommand, cb, elementOrRef, metaKeyRequired]);
};
exports.useGlobalHotkeys = useGlobalHotkeys;
//# sourceMappingURL=useGlobalHotkeys.js.map