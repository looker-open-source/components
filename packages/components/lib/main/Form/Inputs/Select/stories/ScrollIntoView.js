"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ScrollIntoView;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function ScrollIntoView() {
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    placeholder: "Select your cheese of choice...",
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }, {
      label: 'String',
      value: 'string'
    }, {
      label: 'Parmigiano Reggiano',
      value: 'parmesan'
    }, {
      label: 'Roquefort',
      value: 'roquefort'
    }, {
      label: 'Brie',
      value: 'brie'
    }, {
      label: 'Gruyere',
      value: 'gruyere'
    }, {
      label: 'Feta',
      value: 'feta'
    }, {
      label: 'Mozzarella',
      value: 'mozzarella'
    }, {
      label: 'Manchego',
      value: 'manchego'
    }, {
      label: 'Gorgonzola',
      value: 'gorgonzola'
    }, {
      label: 'Epoisses',
      value: 'epoisses'
    }, {
      label: 'Monterey Jack',
      value: 'monterey-jack'
    }, {
      label: 'Muenster',
      value: 'muenster'
    }, {
      label: 'Provolone',
      value: 'provolone'
    }, {
      label: 'Blue',
      value: 'blue'
    }, {
      label: 'Camembert',
      value: 'camembert'
    }, {
      label: 'Havarti',
      value: 'havarti'
    }, {
      label: 'Ricotta',
      value: 'ricotta'
    }, {
      label: 'Mascarpone',
      scrollIntoView: true,
      value: 'mascarpone'
    }]
  });
}
//# sourceMappingURL=ScrollIntoView.js.map