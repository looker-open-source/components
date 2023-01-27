

import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { PieLegend } from './PieLegend';
import { scaleOrdinal } from '@visx/scale';
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(() => {
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 300,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 0,
      x: 0,
      y: 0
    };
  });
});
afterEach(() => {
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
describe('PieLegend', () => {
  const mockData = {
    'New York': 32,
    'Los Angeles': 20,
    Chicago: 17,
    Houston: 15,
    Philadelphia: 8,
    'San Diego': 4,
    'San Antonio': 4
  };
  const mockScale = scaleOrdinal({
    domain: Object.keys(mockData),
    range: Object.values(mockData).map(() => '#fa8072')
  });
  it('paginates legend when height is smaller than content', () => {
    renderWithTheme(React.createElement(PieLegend, {
      legendConfig: {
        type: 'legend',
        position: 'right',
        value: 'label_percent'
      },
      scale: mockScale,
      data: mockData,
      measureTotal: 100,
      width: 150,
      height: 150
    }));

    expect(screen.getByText('New York – 32.00%')).toBeInTheDocument();
    expect(screen.getByLabelText('Legend page 1 of 3')).toBeInTheDocument();
    expect(screen.getByText('Previous page').closest('button')).toBeDisabled();

    fireEvent.click(screen.getByText('Next page'));
    expect(screen.getByLabelText('Legend page 2 of 3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Next page'));
    expect(screen.getByLabelText('Legend page 3 of 3')).toBeInTheDocument();
    expect(screen.getByText('Next page').closest('button')).toBeDisabled();
  });
});
//# sourceMappingURL=PieLegend.spec.js.map