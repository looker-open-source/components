
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockPieConfig, mockLineConfig } from '@looker/visualizations-adapters';
import { Legend } from './Legend';
afterEach(() => {
  jest.resetAllMocks();
});
describe('Legend', () => {
  const handleConfigChange = jest.fn();
  it('hidden when legend is unsupported', () => {
    const {
      container
    } = renderWithTheme(React.createElement(Legend, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    }));
    expect(container).toBeEmptyDOMElement();
  });
  it('hide legend (position="none")', () => {
    renderWithTheme(React.createElement(Legend, {
      config: mockPieConfig,
      onConfigChange: handleConfigChange
    }));

    fireEvent.click(screen.getByLabelText('Legend'));
    fireEvent.click(screen.getByText('none'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: false
    }));
  });
  it('change position', () => {
    renderWithTheme(React.createElement(Legend, {
      config: mockLineConfig,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Legend'));
    fireEvent.click(screen.getByText('top'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'line',
      legend: {
        position: 'top'
      }
    }));

    fireEvent.click(document);
  });
  it('edits legend type for Pie charts', () => {
    renderWithTheme(React.createElement(Legend, {
      config: mockPieConfig,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Legend Type'));
    fireEvent.click(screen.getByText('labels'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: {
        position: 'bottom',
        type: 'labels',
        value: 'label'
      }
    }));

    fireEvent.click(document);
  });
  it('edits legend values for Pie charts', () => {
    renderWithTheme(React.createElement(Legend, {
      config: mockPieConfig,
      onConfigChange: handleConfigChange
    }));
    fireEvent.click(screen.getByLabelText('Legend Values'));
    fireEvent.click(screen.getByText('label_percent'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: {
        position: 'bottom',
        type: 'legend',
        value: 'label_percent'
      }
    }));

    fireEvent.click(document);
  });
  it('does not edit legend type or values for Line charts', () => {
    renderWithTheme(React.createElement(Legend, {
      config: mockLineConfig,
      onConfigChange: handleConfigChange
    }));
    expect(screen.queryByLabelText('Legend Type')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Legend Values')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Legend.spec.js.map