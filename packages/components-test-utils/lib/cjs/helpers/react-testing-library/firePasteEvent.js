"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firePasteEvent = firePasteEvent;

var _react = require("@testing-library/react");

function firePasteEvent(element, value) {
  var eventProperties = {
    clipboardData: {
      getData: function getData() {
        return value;
      }
    }
  };

  var pasteEvent = _react.createEvent.paste(element, eventProperties);

  (0, _react.fireEvent)(element, pasteEvent);
}
//# sourceMappingURL=firePasteEvent.js.map