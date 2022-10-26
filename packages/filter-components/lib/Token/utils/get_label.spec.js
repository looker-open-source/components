import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { getLabel } from './get_label';
import { i18nInit } from '../../utils';
describe('getLabel', () => {
  i18nInit();
  const defaultFilterProps = {
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

  const getFilter = (propsOverride = {}) => {
    return _objectSpread(_objectSpread({}, defaultFilterProps), propsOverride);
  };

  describe('when filter is not a parameter', () => {
    it('should return the value', () => {
      expect(getLabel(getFilter())).toBe('is value');
    });
    describe('and fieldOptions is unavailable', () => {
      it('should return the value', () => {
        const filter = _objectSpread(_objectSpread({}, getFilter()), {}, {
          fieldOptions: null
        });

        expect(getLabel(filter)).toBe('is value');
      });
    });
  });
  describe('when filter is a parameter', () => {
    describe('and label is available', () => {
      it('should return the label', () => {
        const filterState = getFilter();

        const filter = _objectSpread(_objectSpread({}, filterState), {}, {
          field: {
            parameter: true,
            has_allowed_values: true,
            enumerations: defaultFilterProps.enumerations
          }
        });

        expect(getLabel(filter)).toBe('is label');
      });
    });
    describe('and label is not available', () => {
      describe('and value is not in the enumerations', () => {
        describe('and value is defined', () => {
          it('should return the filter value', () => {
            const filter = _objectSpread(_objectSpread({}, getFilter()), {}, {
              expressionType: 'date',
              field: {
                parameter: true
              },
              label: undefined,
              expression: '2020/09/21'
            });

            expect(getLabel(filter)).toBe('is on 2020/09/21');
          });
        });
        describe('and value is not available', () => {
          it('should return `is any value``', () => {
            const filter = getFilter({
              field: {
                parameter: true
              },
              expression: undefined
            });
            expect(getLabel(filter)).toBe('is any value');
          });
        });
      });
      describe('and value is not in the enumerations and enumerations is null', () => {
        it('should return `is any value``', () => {
          const filter = getFilter({
            field: {
              parameter: true
            },
            enumerations: null,
            expression: undefined
          });
          expect(getLabel(filter)).toBe('is any value');
        });
      });
      describe('and value is in the enumerations', () => {
        it('should return `is any value``', () => {
          const enumerations = [{
            label: 'lab',
            value: 'val'
          }, {
            label: 'label from enum',
            value: 'value'
          }];
          const filter = getFilter({
            field: {
              parameter: true,
              has_allowed_values: true,
              enumerations
            },
            enumerations
          });
          expect(getLabel(filter)).toBe('is label from enum');
        });
      });
    });
  });
});
//# sourceMappingURL=get_label.spec.js.map