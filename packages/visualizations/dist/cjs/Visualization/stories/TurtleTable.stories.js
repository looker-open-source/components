"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TurtleTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _visualizationsVisx = require("@looker/visualizations-visx");
var _visualizationsTable = require("@looker/visualizations-table");
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/TurtleTable'
};
exports["default"] = _default;
var NESTED_DATA_KEY = 'orderCount';
var ROW_HEIGHT = 75;
var nestSparklines = function nestSparklines(data) {
  return data.reduce(function (acc, d) {
    var _ref4;
    var _Object$entries = Object.entries(d),
      _Object$entries2 = _toArray(_Object$entries),
      parentDimension = _Object$entries2[0],
      measurePairs = _Object$entries2.slice(1);
    var nonPivotedData = measurePairs.map(function (_ref, i) {
      var _ref2 = _slicedToArray(_ref, 2),
        _ = _ref2[0],
        value = _ref2[1];
      return _defineProperty({
        entry: i
      }, NESTED_DATA_KEY, value);
    });
    return [].concat(_toConsumableArray(acc), [(_ref4 = {}, _defineProperty(_ref4, parentDimension[0], parentDimension[1]), _defineProperty(_ref4, NESTED_DATA_KEY, function () {
      return _react["default"].createElement(_visualizationsVisx.Sparkline, {
        height: ROW_HEIGHT,
        data: nonPivotedData,
        fields: {
          measures: [{
            name: NESTED_DATA_KEY
          }],
          dimensions: []
        }
      });
    }), _ref4)]);
  }, []);
};
var TurtleTableComponent = function TurtleTableComponent(_ref5) {
  var fields = _ref5.fields,
    data = _ref5.data,
    config = _ref5.config,
    pivots = _ref5.pivots,
    height = _ref5.height;
  var nestedData = nestSparklines(data);
  return _react["default"].createElement(_visualizationsTable.Table, {
    height: height,
    fields: {
      measures: [{
        name: NESTED_DATA_KEY,
        label: 'Orders Count By Quarter'
      }],
      dimensions: fields.dimensions,
      pivots: []
    },
    config: config,
    data: nestedData,
    pivots: pivots,
    defaultRowHeight: ROW_HEIGHT
  });
};
var Template = function Template() {
  return _react["default"].createElement(_Visualization.Visualization, _extends({}, _visualizationsAdapters.mockPivotedQuery, {
    height: 600,
    chartTypeMap: {
      turtle_table: TurtleTableComponent
    },
    config: {
      type: 'turtle_table'
    }
  }));
};
var TurtleTable = Template.bind({});
exports.TurtleTable = TurtleTable;
//# sourceMappingURL=TurtleTable.stories.js.map