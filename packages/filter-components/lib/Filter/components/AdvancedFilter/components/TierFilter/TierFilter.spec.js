import _extends from "@babel/runtime/helpers/extends";
import { Category } from '@looker/sdk';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { TierFilter } from './TierFilter';
describe('Tier filter test', () => {
  const enumerations = [{
    value: '1',
    label: 'a'
  }, {
    value: '2',
    label: 'b'
  }, {
    value: 'with^_underscore^_03',
    label: 'With underscore c'
  }, {
    value: 'with^_underscore^_04',
    label: 'With underscore d'
  }];
  const defaultProps = {
    enumerations,
    filterType: 'tier',
    onChange: jest.fn(),
    showAdd: false,
    showName: true,
    showRemove: false,
    showOperator: false,
    showMatchesAdvanced: false,
    onAdd: jest.fn(),
    onRemove: jest.fn()
  };
  it('should render a TierFilter', () => {
    const item = {
      id: '1',
      is: true,
      type: 'match',
      value: []
    };
    renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
      item: item
    })));
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
  describe('when the filter is a parameter', () => {
    describe('and there is no value selected', () => {
      it('should not change the item value', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: []
        };
        renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
          item: item,
          field: {
            category: Category.parameter
          }
        })));
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('a');
      });
    });
    describe('and there is an existing value selected', () => {
      it('should not change the item value (default value does not have underscores)', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['2']
        };
        renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
          item: item,
          field: {
            category: Category.parameter,
            has_allowed_values: true
          }
        })));
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('b');
      });
      it('should not change the item value (default value has underscores)', () => {
        const item = {
          id: '1',
          type: 'match',
          is: true,
          value: ['with_underscore_04']
        };
        renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
          item: item,
          field: {
            category: Category.parameter,
            has_allowed_values: true
          }
        })));
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('is');
        expect(inputs[1]).toHaveValue('With underscore d');
      });
    });
    describe('and there is an invalid value selected', () => {
      it('should change the item value', () => {
        const item = {
          id: '1',
          type: 'match',
          is: false,
          value: ['abc']
        };
        renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
          item: item,
          field: {
            category: Category.parameter,
            has_allowed_values: true
          }
        })));
        const inputs = screen.getAllByRole('textbox');
        expect(inputs[0]).toHaveValue('!match');
        expect(inputs[1]).toHaveValue('a');
      });
    });
  });
  describe('and advanced filter control', () => {
    it('should render with Add button', () => {
      const item = {
        id: '1',
        type: 'match',
        is: false,
        value: ['abc']
      };
      renderWithTheme(React.createElement(TierFilter, _extends({}, defaultProps, {
        item: item,
        showAdd: true,
        field: {
          category: Category.parameter
        }
      })));
      expect(screen.getByRole('button')).toHaveTextContent('Add');
    });
  });
});
//# sourceMappingURL=TierFilter.spec.js.map