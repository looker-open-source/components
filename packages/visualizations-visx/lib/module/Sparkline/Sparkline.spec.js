
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockFields, mockData, mockDataWithNull } from '@looker/visualizations-adapters';
import { Sparkline } from './Sparkline';
describe('Sparkline Chart', () => {
  it('renders an svg based derived from two dimensional response', () => {
    renderWithTheme(React.createElement(Sparkline, {
      config: {
        type: 'sparkline'
      },
      data: mockData,
      fields: mockFields
    }));
    expect(screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot(`
      <svg
        data-testid="sparkline-chart"
        height="500"
      >
        <path
          class="visx-linepath"
          d="M1.5,498.5L0,1.5L-1.5,96.26133333333331"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
    `);
  });
  it('accepts line width overrides', () => {
    renderWithTheme(React.createElement(Sparkline, {
      config: {
        series: [{
          line_width: 5
        }],
        type: 'sparkline'
      },
      data: mockData,
      fields: mockFields
    }));
    const linePath = screen.getByTestId('sparkline-chart').firstChild;
    expect(linePath).toHaveAttribute('stroke-width', '5');
  });
  it('renders multiple svg paths when encountering a null data point', () => {
    renderWithTheme(React.createElement(Sparkline, {
      config: {
        type: 'sparkline'
      },
      data: mockDataWithNull,
      fields: mockFields
    }));
    expect(screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot(`
      <svg
        data-testid="sparkline-chart"
        height="500"
      >
        <path
          class="visx-linepath"
          d="M1.5,1.5L0.75,498.5"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
        <path
          class="visx-linepath"
          d="M-0.75,1.5L-1.5,285.784"
          fill="transparent"
          stroke="#6C43E0"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
    `);
  });
});
//# sourceMappingURL=Sparkline.spec.js.map