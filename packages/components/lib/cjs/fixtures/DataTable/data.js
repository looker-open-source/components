"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = exports.data = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var row = {
  id: 'gouda',
  disabled: false,
  name: 'Gouda',
  status: 'Available',
  inventory: 569,
  color: 'yellow',
  origin: 'Netherlands',
  type: 'semi-hard, artisan, brined, processed',
  calories: 101,
  fat: 8,
  protein: 7,
  calcium: 0.958,
  description: "Gouda is a mild-flavored, yellow cow's milk cheese originating from the Netherlands. It is one of the most popular cheeses worldwide. The name is used today as a general term for numerous similar cheeses produced in the traditional Dutch manner. "
};
exports.row = row;
var data = [row, _objectSpread(_objectSpread({}, row), {}, {
  id: 'american',
  name: 'American',
  inventory: 0,
  origin: 'United States',
  type: 'semi-soft, processed',
  calories: undefined,
  fat: undefined,
  protein: undefined,
  calcium: undefined,
  status: 'Out of Stock',
  description: "Modern American cheese is a type of processed cheese made from cheddar, colby, or similar cheeses. It is mild with a creamy and salty flavor, has a medium-firm consistency, and has a low melting point. It can be yellow or white in color; yellow American cheese is seasoned and colored with annatto"
}), _objectSpread(_objectSpread({}, row), {}, {
  id: 'brie',
  name: 'Brie',
  inventory: 240,
  origin: 'France',
  type: undefined,
  calories: undefined,
  fat: 40,
  protein: undefined,
  calcium: undefined,
  status: 'Out of Stock',
  description: "Brie is a soft cow's-milk cheese named after Brie, the French region from which it originated. It is pale in color with a slight grayish tinge under a rind of white mould. The rind is typically eaten, with its flavor depending largely upon the ingredients used and its manufacturing environment."
}), _objectSpread(_objectSpread({}, row), {}, {
  id: 'cheddar',
  name: 'Cheddar',
  inventory: 84,
  origin: 'England',
  type: 'hard, artisan, processed',
  calories: undefined,
  fat: 9,
  protein: undefined,
  calcium: undefined,
  status: 'Low Stock',
  description: "Cheddar cheese is a relatively hard, off-white, sometimes sharp-tasting, natural cheese. Originating in the English village of Cheddar in Somerset, cheeses of this style are now produced all over the world."
}), _objectSpread(_objectSpread({}, row), {}, {
  id: 'provolone',
  name: 'Provolone',
  color: 'pale yellow',
  inventory: 781,
  origin: 'Italy',
  type: 'semi-hard, artisan',
  calories: undefined,
  fat: undefined,
  protein: undefined,
  calcium: undefined,
  description: "Provolone is an Italian cheese. It is an aged pasta filata cheese originating in Casilli near Vesuvius, where it is still produced in pear, sausage, or cone shapes 10 to 15 cm long. Provolone-type cheeses are also produced in other countries."
})];
exports.data = data;
//# sourceMappingURL=data.js.map