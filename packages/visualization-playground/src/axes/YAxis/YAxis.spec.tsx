/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig } from '@looker/visualizations-adapters';
import { YAxis } from './YAxis';

afterEach(() => {
  jest.resetAllMocks();
});

describe('YAxis', () => {
  const handleConfigChange = jest.fn();

  it('renders y-axis toggle when there are multiple config objects', () => {
    renderWithTheme(
      <YAxis
        config={{
          ...mockLineConfig,
          y_axis: [{ range: [0, 100] }, { range: ['auto', 'auto'] }],
        }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument(); // button group value
    expect(screen.getByText('2')).toBeInTheDocument(); // button group value
  });

  it('hidden when Y-Axis is unsupported', () => {
    const { container } = renderWithTheme(
      <YAxis
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles YAxis gridlines', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ gridlines: false }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Render Gridlines'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ gridlines: true }],
      })
    );
  });

  it('updates YAxis label value', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ label: false }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'New Label' },
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ label: 'New Label' }],
      })
    );
  });

  it('sets YAxis label to false when text input is empty', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ label: 'Default Label' }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: '' },
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ label: false }],
      })
    );
  });

  it('toggles YAxis values', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ values: false }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Show Values'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ values: true }],
      })
    );
  });

  it('updates range: min', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ range: ['auto', 'auto'] }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.change(screen.getByLabelText('Y-min'), { target: { value: 20 } });

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ range: [20, 'auto'] }],
      })
    );
  });

  it('updates range: max', () => {
    renderWithTheme(
      <YAxis
        config={{ ...mockLineConfig, y_axis: [{ range: ['auto', 'auto'] }] }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.change(screen.getByLabelText('Y-max'), { target: { value: 50 } });

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        y_axis: [{ range: ['auto', 50] }],
      })
    );
  });
});
