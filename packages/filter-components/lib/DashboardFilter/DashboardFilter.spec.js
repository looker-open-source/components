import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { DashboardFilter } from './DashboardFilter';
jest.mock('@looker/sdk', () => _objectSpread(_objectSpread({}, jest.requireActual('@looker/sdk')), {}, {
  model_fieldname_suggestions: jest.fn(sdk => sdk.get())
}));
import { model_fieldname_suggestions } from '@looker/sdk';
describe('DashboardFilter', () => {
  it('renders label', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(DashboardFilter, {
      filter: {
        name: 'Status',
        field: {}
      },
      onChange: onChangeMock
    }));
    expect(screen.getByText('Status')).toBeVisible();
  });
  it('renders validation message', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(DashboardFilter, {
      filter: {
        name: 'Status',
        field: {},
        required: true
      },
      onChange: onChangeMock
    }));
    expect(screen.getByText('Value required')).toBeVisible();
  });
  it('calls onChange', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(DashboardFilter, {
      filter: {
        name: 'Status',
        field: {
          suggestions: ['complete', 'pending', 'cancelled']
        },
        ui_config: {
          type: 'button_group'
        }
      },
      onChange: onChangeMock
    }));
    const cancelled = screen.getByText('cancelled');
    fireEvent.click(cancelled);
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "cancelled",
        ],
      ]
    `);
  });
  it('handles undefined field (LookML filter)', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(DashboardFilter, {
      filter: {
        name: 'date',
        type: 'date_filter',
        default_value: '30 days'
      },
      onChange: onChangeMock
    }));
    expect(screen.getByText('is in the last')).toBeVisible();
    expect(screen.getByText('30')).toBeVisible();
    expect(screen.getByText('days')).toBeVisible();
  });
  describe('value', () => {
    it('uses default_value', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {},
          default_value: 'complete',
          allow_multiple_values: true
        },
        onChange: onChangeMock
      }));
      expect(screen.getByRole('option')).toHaveTextContent('complete');
    });
    it('uses expression if available', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {},
          default_value: 'complete',
          allow_multiple_values: true
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));
      const values = screen.getAllByRole('option');
      expect(values[0]).toHaveTextContent('complete');
      expect(values[1]).toHaveTextContent('pending');
    });
  });
  describe('options', () => {
    it('uses field suggestions if available', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            suggestions: ['complete', 'pending', 'cancelled']
          },
          default_value: 'complete',
          ui_config: {
            type: 'button_group'
          }
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));
      const values = screen.getAllByRole('button');
      expect(values[0]).toHaveTextContent('complete');
      expect(values[0]).toHaveAttribute('aria-pressed', 'true');
      expect(values[1]).toHaveTextContent('pending');
      expect(values[1]).toHaveAttribute('aria-pressed', 'true');
      expect(values[2]).toHaveTextContent('cancelled');
      expect(values[2]).toHaveAttribute('aria-pressed', 'false');
    });
    it('uses field enumerations if available', () => {
      const onChangeMock = jest.fn();
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            enumerations: [{
              label: 'complete',
              value: 'complete'
            }, {
              label: 'pending',
              value: 'pending'
            }, {
              label: 'cancelled',
              value: 'cancelled'
            }]
          },
          default_value: 'complete',
          ui_config: {
            type: 'button_group'
          }
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));
      const values = screen.getAllByRole('button');
      expect(values[0]).toHaveTextContent('complete');
      expect(values[0]).toHaveAttribute('aria-pressed', 'true');
      expect(values[1]).toHaveTextContent('pending');
      expect(values[1]).toHaveAttribute('aria-pressed', 'true');
      expect(values[2]).toHaveTextContent('cancelled');
      expect(values[2]).toHaveAttribute('aria-pressed', 'false');
    });
    it('fetches suggestions', async () => {
      const onChangeMock = jest.fn();
      const sdkOkMock = jest.fn(value => Promise.resolve(value));
      const sdkGetMock = jest.fn(() => ({
        suggestions: ['complete', 'pending', 'cancelled']
      }));
      const sdkMock = {
        ok: sdkOkMock,
        get: sdkGetMock
      };
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            name: 'orders.status',
            suggestable: true,
            project_name: 'bar',
            suggest_dimension: 'orders.status',
            view: 'orders'
          },
          default_value: 'complete',
          model: 'foo',
          ui_config: {
            type: 'button_group'
          }
        },
        sdk: sdkMock,
        expression: "complete,pending",
        onChange: onChangeMock
      }));
      const values = await screen.findAllByRole('button');
      expect(values[0]).toHaveTextContent('complete');
      expect(values[0]).toHaveAttribute('aria-pressed', 'true');
      expect(values[1]).toHaveTextContent('pending');
      expect(values[1]).toHaveAttribute('aria-pressed', 'true');
      expect(values[2]).toHaveTextContent('cancelled');
      expect(values[2]).toHaveAttribute('aria-pressed', 'false');
      expect(model_fieldname_suggestions).toHaveBeenCalledWith({
        ok: sdkOkMock,
        get: sdkGetMock
      }, {
        field_name: 'orders.status',
        model_name: 'foo',
        term: '',
        view_name: 'orders'
      });
    });
    it('shows fetch error message', async () => {
      const onChangeMock = jest.fn();
      const sdkMock = {
        ok: jest.fn(value => value),
        get: jest.fn(() => {
          throw new Error();
        })
      };
      renderWithTheme(React.createElement(DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            suggestable: true
          },
          default_value: 'complete',
          ui_config: {
            type: 'button_group'
          }
        },
        sdk: sdkMock,
        expression: "complete,pending",
        onChange: onChangeMock
      }));
      expect(await screen.findByTestId('error-icon')).toBeVisible();
    });
  });
});
//# sourceMappingURL=DashboardFilter.spec.js.map