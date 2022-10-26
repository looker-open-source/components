import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { renderHook } from '@testing-library/react-hooks';
import { useFiltersErrors } from './use_filters_errors';
import { getUserAttributeMatchingTypeAndExpression } from '@looker/filter-expressions';
import { ERROR_TYPE } from '../constants';
jest.mock('@looker/filter-expressions', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/filter-expressions')), {}, {
  getUserAttributeMatchingTypeAndExpression: jest.fn()
}));
jest.mock('@looker/i18n', () => ({
  useTranslationBase: () => {
    return {
      t: str => str
    };
  }
}));
describe('FilterErrorMessage utils tests', () => {
  const getFilter = (overrideFilter = {}) => {
    const defaultFilter = {
      expression: '',
      expressionType: 'string',
      isRequired: true,
      name: 'testfilter'
    };
    return _objectSpread(_objectSpread({}, defaultFilter), overrideFilter);
  };

  describe('useFiltersErrors', () => {
    const requiredValidationMessage = {
      type: ERROR_TYPE,
      message: 'Selection required'
    };
    const invalidValueMessage = {
      type: ERROR_TYPE,
      message: 'Invalid value'
    };
    const invalidValueLongMessage = {
      type: ERROR_TYPE,
      message: 'No value is set for your user attribute'
    };
    describe('without user attributes', () => {
      it('should return a validationMessage for a required filter error', () => {
        const filters = [getFilter()];
        const {
          result: {
            current
          }
        } = renderHook(() => useFiltersErrors(filters));
        expect(current).toEqual(requiredValidationMessage);
      });
      it('should return a validationMessage for a required filter error if any have an error', () => {
        const filters = [getFilter({
          isRequired: false
        }), getFilter()];
        const {
          result: {
            current
          }
        } = renderHook(() => useFiltersErrors(filters));
        expect(current).toEqual(requiredValidationMessage);
      });
      it('should not return a validationMessage for a required filter error if there is no error', () => {
        const filters = [getFilter({
          expression: 'value'
        })];
        const {
          result: {
            current
          }
        } = renderHook(() => useFiltersErrors(filters));
        expect(current).toEqual({});
      });
    });
    describe('with user attributes', () => {
      const notRequiredFilter = getFilter({
        isRequired: false
      });
      beforeEach(() => {
        ;
        getUserAttributeMatchingTypeAndExpression.mockReset();
      });
      describe('when filter is not linked to any user attributes', () => {
        beforeEach(() => {
          ;
          getUserAttributeMatchingTypeAndExpression.mockReturnValue(null);
        });
        it('should not return any error', () => {
          const {
            result: {
              current
            }
          } = renderHook(() => useFiltersErrors([notRequiredFilter]));
          expect(current).toEqual({});
        });
      });
      describe('when filter is linked to a user attribute that does not have a value', () => {
        beforeEach(() => {
          const userAttribute = {
            name: 'some-ua-name',
            value: null
          };
          getUserAttributeMatchingTypeAndExpression.mockReturnValue(userAttribute);
        });
        describe('and we want the short form message', () => {
          it('should return an error', () => {
            const {
              result: {
                current
              }
            } = renderHook(() => useFiltersErrors([notRequiredFilter], {
              useLongMessageForm: false
            }));
            expect(current).toEqual(invalidValueMessage);
          });
        });
        describe('and we want the long form message', () => {
          it('should return an error', () => {
            const {
              result: {
                current
              }
            } = renderHook(() => useFiltersErrors([notRequiredFilter], {
              useLongMessageForm: true
            }));
            expect(current).toEqual(invalidValueLongMessage);
          });
        });
      });
      describe('when filter is linked to a user attribute that has a value', () => {
        beforeEach(() => {
          const userAttribute = {
            name: 'some-ua-name',
            value: 'some value!'
          };
          getUserAttributeMatchingTypeAndExpression.mockReturnValue(userAttribute);
        });
        it('should not return any error', () => {
          const {
            result: {
              current
            }
          } = renderHook(() => useFiltersErrors([notRequiredFilter]));
          expect(current).toEqual({});
        });
      });
    });
  });
});
//# sourceMappingURL=use_filters_errors.spec.js.map