"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSuggestable = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _sdk = require("@looker/sdk");

var _react = require("react");

var _utils = require("../utils");

var _FilterCollection = require("../FilterCollection");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var shouldFetchSuggestions = function shouldFetchSuggestions(field) {
  return (field === null || field === void 0 ? void 0 : field.suggestable) && !(field !== null && field !== void 0 && field.enumerations) && !(field !== null && field !== void 0 && field.suggestions);
};

var getOptionsProps = function getOptionsProps(field, fetchedSuggestions) {
  if (shouldFetchSuggestions(field)) {
    return {
      suggestions: fetchedSuggestions
    };
  }

  var _ref = field || {},
      enumerations = _ref.enumerations,
      suggestions = _ref.suggestions;

  if (enumerations) {
    return {
      enumerations: enumerations
    };
  }

  if (suggestions) {
    return {
      suggestions: suggestions
    };
  }

  return {};
};

var getLinkedFilterMap = function getLinkedFilterMap(filterMap, listensToFilters) {
  if (!listensToFilters || listensToFilters.length === 0) return undefined;
  return listensToFilters.reduce(function (acc, title) {
    if (filterMap[title]) {
      var _filterMap$title = filterMap[title],
          filter = _filterMap$title.filter,
          expression = _filterMap$title.expression;

      if (filter.dimension && expression) {
        acc[filter.dimension] = expression;
      }
    }

    return acc;
  }, {});
};

var useSuggestable = function useSuggestable(_ref2) {
  var filter = _ref2.filter,
      sdk = _ref2.sdk;

  var _useContext = (0, _react.useContext)(_FilterCollection.FilterContext),
      state = _useContext.state;

  var filterMap = state.filterMap;
  var field = filter.field;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      fetchedSuggestions = _useState8[0],
      setSuggestions = _useState8[1];

  var _useTranslation = (0, _utils.useTranslation)('use_suggestable'),
      t = _useTranslation.t;

  var translatedErrorMessage = t('Error loading suggestions');
  var listens_to_filters = filter.listens_to_filters;
  var linkedFilterMap = (0, _react.useMemo)(function () {
    return getLinkedFilterMap(filterMap, listens_to_filters);
  }, [filterMap, listens_to_filters]);
  (0, _react.useEffect)(function () {
    var loadSuggestions = function () {
      var _ref3 = (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
        var params, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(sdk && shouldFetchSuggestions(field))) {
                  _context.next = 15;
                  break;
                }

                setLoading(true);
                params = {
                  field_name: (field === null || field === void 0 ? void 0 : field.suggest_dimension) || '',
                  model_name: filter.model || '',
                  term: searchTerm,
                  view_name: (field === null || field === void 0 ? void 0 : field.suggest_explore) || (field === null || field === void 0 ? void 0 : field.view) || '',
                  filters: linkedFilterMap
                };
                _context.prev = 3;
                _context.next = 6;
                return sdk.ok((0, _sdk.model_fieldname_suggestions)(sdk, params));

              case 6:
                result = _context.sent;
                setLoading(false);
                setSuggestions(result.suggestions || []);
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                setLoading(false);
                setErrorMessage(translatedErrorMessage);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      return function loadSuggestions() {
        return _ref3.apply(this, arguments);
      };
    }();

    loadSuggestions();
  }, [filter.model, field, searchTerm, sdk, linkedFilterMap, translatedErrorMessage]);
  return {
    errorMessage: errorMessage,
    suggestableProps: _objectSpread({
      isLoading: isLoading,
      onInputChange: setSearchTerm
    }, getOptionsProps(field, fetchedSuggestions))
  };
};

exports.useSuggestable = useSuggestable;
//# sourceMappingURL=use_suggestable.js.map