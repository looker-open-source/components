"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactHooks = require("@testing-library/react-hooks");

var _use_filters_errors = require("./use_filters_errors");

var _filterExpressions = require("@looker/filter-expressions");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

jest.mock('@looker/filter-expressions', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/filter-expressions')), {}, {
    getUserAttributeMatchingTypeAndExpression: jest.fn()
  });
});
jest.mock('@looker/i18n', function () {
  return {
    useTranslationBase: function useTranslationBase() {
      return {
        t: function t(str) {
          return str;
        }
      };
    }
  };
});
describe('FilterErrorMessage utils tests', function () {
  var getFilter = function getFilter() {
    var overrideFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultFilter = {
      expression: '',
      expressionType: 'string',
      isRequired: true,
      name: 'testfilter'
    };
    return _objectSpread(_objectSpread({}, defaultFilter), overrideFilter);
  };

  describe('useFiltersErrors', function () {
    var requiredValidationMessage = {
      type: _constants.ERROR_TYPE,
      message: 'Selection required'
    };
    var invalidValueMessage = {
      type: _constants.ERROR_TYPE,
      message: 'Invalid value'
    };
    var invalidValueLongMessage = {
      type: _constants.ERROR_TYPE,
      message: 'No value is set for your user attribute'
    };
    describe('without user attributes', function () {
      it('should return a validationMessage for a required filter error', function () {
        var filters = [getFilter()];

        var _renderHook = (0, _reactHooks.renderHook)(function () {
          return (0, _use_filters_errors.useFiltersErrors)(filters);
        }),
            current = _renderHook.result.current;

        expect(current).toEqual(requiredValidationMessage);
      });
      it('should return a validationMessage for a required filter error if any have an error', function () {
        var filters = [getFilter({
          isRequired: false
        }), getFilter()];

        var _renderHook2 = (0, _reactHooks.renderHook)(function () {
          return (0, _use_filters_errors.useFiltersErrors)(filters);
        }),
            current = _renderHook2.result.current;

        expect(current).toEqual(requiredValidationMessage);
      });
      it('should not return a validationMessage for a required filter error if there is no error', function () {
        var filters = [getFilter({
          expression: 'value'
        })];

        var _renderHook3 = (0, _reactHooks.renderHook)(function () {
          return (0, _use_filters_errors.useFiltersErrors)(filters);
        }),
            current = _renderHook3.result.current;

        expect(current).toEqual({});
      });
    });
    describe('with user attributes', function () {
      var notRequiredFilter = getFilter({
        isRequired: false
      });
      beforeEach(function () {
        ;

        _filterExpressions.getUserAttributeMatchingTypeAndExpression.mockReset();
      });
      describe('when filter is not linked to any user attributes', function () {
        beforeEach(function () {
          ;

          _filterExpressions.getUserAttributeMatchingTypeAndExpression.mockReturnValue(null);
        });
        it('should not return any error', function () {
          var _renderHook4 = (0, _reactHooks.renderHook)(function () {
            return (0, _use_filters_errors.useFiltersErrors)([notRequiredFilter]);
          }),
              current = _renderHook4.result.current;

          expect(current).toEqual({});
        });
      });
      describe('when filter is linked to a user attribute that does not have a value', function () {
        beforeEach(function () {
          var userAttribute = {
            name: 'some-ua-name',
            value: null
          };

          _filterExpressions.getUserAttributeMatchingTypeAndExpression.mockReturnValue(userAttribute);
        });
        describe('and we want the short form message', function () {
          it('should return an error', function () {
            var _renderHook5 = (0, _reactHooks.renderHook)(function () {
              return (0, _use_filters_errors.useFiltersErrors)([notRequiredFilter], {
                useLongMessageForm: false
              });
            }),
                current = _renderHook5.result.current;

            expect(current).toEqual(invalidValueMessage);
          });
        });
        describe('and we want the long form message', function () {
          it('should return an error', function () {
            var _renderHook6 = (0, _reactHooks.renderHook)(function () {
              return (0, _use_filters_errors.useFiltersErrors)([notRequiredFilter], {
                useLongMessageForm: true
              });
            }),
                current = _renderHook6.result.current;

            expect(current).toEqual(invalidValueLongMessage);
          });
        });
      });
      describe('when filter is linked to a user attribute that has a value', function () {
        beforeEach(function () {
          var userAttribute = {
            name: 'some-ua-name',
            value: 'some value!'
          };

          _filterExpressions.getUserAttributeMatchingTypeAndExpression.mockReturnValue(userAttribute);
        });
        it('should not return any error', function () {
          var _renderHook7 = (0, _reactHooks.renderHook)(function () {
            return (0, _use_filters_errors.useFiltersErrors)([notRequiredFilter]);
          }),
              current = _renderHook7.result.current;

          expect(current).toEqual({});
        });
      });
    });
  });
});
//# sourceMappingURL=use_filters_errors.spec.js.map