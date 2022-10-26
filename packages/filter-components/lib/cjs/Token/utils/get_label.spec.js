"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _get_label = require("./get_label");

var _utils = require("../../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('getLabel', function () {
  (0, _utils.i18nInit)();
  var defaultFilterProps = {
    config: {},
    name: 'name',
    enumerations: [{
      value: 'value',
      label: 'label'
    }],
    expression: 'value',
    field: {
      parameter: false
    },
    expressionType: 'tier'
  };

  var getFilter = function getFilter() {
    var propsOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _objectSpread(_objectSpread({}, defaultFilterProps), propsOverride);
  };

  describe('when filter is not a parameter', function () {
    it('should return the value', function () {
      expect((0, _get_label.getLabel)(getFilter())).toBe('is value');
    });
    describe('and fieldOptions is unavailable', function () {
      it('should return the value', function () {
        var filter = _objectSpread(_objectSpread({}, getFilter()), {}, {
          fieldOptions: null
        });

        expect((0, _get_label.getLabel)(filter)).toBe('is value');
      });
    });
  });
  describe('when filter is a parameter', function () {
    describe('and label is available', function () {
      it('should return the label', function () {
        var filterState = getFilter();

        var filter = _objectSpread(_objectSpread({}, filterState), {}, {
          field: {
            parameter: true,
            has_allowed_values: true,
            enumerations: defaultFilterProps.enumerations
          }
        });

        expect((0, _get_label.getLabel)(filter)).toBe('is label');
      });
    });
    describe('and label is not available', function () {
      describe('and value is not in the enumerations', function () {
        describe('and value is defined', function () {
          it('should return the filter value', function () {
            var filter = _objectSpread(_objectSpread({}, getFilter()), {}, {
              expressionType: 'date',
              field: {
                parameter: true
              },
              label: undefined,
              expression: '2020/09/21'
            });

            expect((0, _get_label.getLabel)(filter)).toBe('is on 2020/09/21');
          });
        });
        describe('and value is not available', function () {
          it('should return `is any value``', function () {
            var filter = getFilter({
              field: {
                parameter: true
              },
              expression: undefined
            });
            expect((0, _get_label.getLabel)(filter)).toBe('is any value');
          });
        });
      });
      describe('and value is not in the enumerations and enumerations is null', function () {
        it('should return `is any value``', function () {
          var filter = getFilter({
            field: {
              parameter: true
            },
            enumerations: null,
            expression: undefined
          });
          expect((0, _get_label.getLabel)(filter)).toBe('is any value');
        });
      });
      describe('and value is in the enumerations', function () {
        it('should return `is any value``', function () {
          var enumerations = [{
            label: 'lab',
            value: 'val'
          }, {
            label: 'label from enum',
            value: 'value'
          }];
          var filter = getFilter({
            field: {
              parameter: true,
              has_allowed_values: true,
              enumerations: enumerations
            },
            enumerations: enumerations
          });
          expect((0, _get_label.getLabel)(filter)).toBe('is label from enum');
        });
      });
    });
  });
});
//# sourceMappingURL=get_label.spec.js.map