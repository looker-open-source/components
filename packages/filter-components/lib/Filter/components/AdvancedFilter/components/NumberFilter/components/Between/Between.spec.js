import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Between } from './Between';
const fitlerData = {
  bounds: '[]',
  high: '5',
  id: '1',
  is: true,
  low: '3',
  type: 'between'
};
const mockChange = jest.fn();
describe('Between Filter tests', () => {
  it('Input fields only accept numbers', () => {
    renderWithTheme(React.createElement(Between, {
      item: fitlerData
    }));
    expect(screen.getByTestId('low')).toHaveAttribute('type', 'number');
    expect(screen.getByTestId('high')).toHaveAttribute('type', 'number');
  });
  it('registers input change', () => {
    renderWithTheme(React.createElement(Between, {
      item: fitlerData,
      onChange: mockChange
    }));
    fireEvent.change(screen.getByTestId('low'), {
      target: {
        value: 4
      }
    });
    fireEvent.change(screen.getByTestId('high'), {
      target: {
        value: 15
      }
    });
    expect(mockChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "low": "4",
          },
        ],
        Array [
          "1",
          Object {
            "high": "15",
          },
        ],
      ]
    `);
  });
});
//# sourceMappingURL=Between.spec.js.map