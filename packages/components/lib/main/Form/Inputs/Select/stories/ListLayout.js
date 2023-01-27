"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListLayout;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _Layout = require("../../../../Layout");

function ListLayout() {
  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_.Select, {
    maxWidth: 400,
    listLayout: {
      width: 'auto'
    },
    placeholder: "Accommodate wide options",
    options: [{
      label: 'Short label',
      value: 'short'
    }, {
      label: 'Incredibly long label that causes the list to be wider than the input',
      value: 'long'
    }]
  }), _react["default"].createElement(_.Select, {
    maxWidth: 400,
    listLayout: {
      maxHeight: 300,
      maxWidth: 700,
      width: '90vw'
    },
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
      value: 'mascarpone'
    }]
  }));
}
//# sourceMappingURL=ListLayout.js.map