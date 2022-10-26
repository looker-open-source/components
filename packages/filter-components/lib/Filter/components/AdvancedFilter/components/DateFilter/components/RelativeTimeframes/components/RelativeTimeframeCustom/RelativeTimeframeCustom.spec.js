import _extends from "@babel/runtime/helpers/extends";
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { AllPresetTimeframes } from '../../../../types/relative_timeframe_types';
import { RelativeTimeframeCustom } from './RelativeTimeframeCustom';
const dateRegex = /\d{4}\/\d{2}\/\d{2}/;

const getMockComponent = (props = {}) => {
  const defaultProps = {
    value: AllPresetTimeframes.Today,
    onCustomChange: jest.fn()
  };
  return React.createElement(RelativeTimeframeCustom, _extends({}, defaultProps, props));
};

const getSelectedDatesLabels = container => {
  const selectedDates = container.querySelectorAll('[aria-selected="true"]');
  return Array.from(selectedDates).map(selectedDate => selectedDate.getAttribute('aria-label'));
};

describe('RelativeTimeframeCustom', () => {
  beforeEach(() => {
    const defaultDate = new Date('2019-01-01T00:00:00.000-08:00');
    jest.spyOn(Date, 'now').mockImplementation(() => defaultDate.getTime());
  });
  it('should default as expected when value is an AllPresetTimeframes', () => {
    const {
      container
    } = renderWithTheme(getMockComponent());
    const fromDateInput = screen.getByTestId('date-from-text-input');
    const toDateInput = screen.getByTestId('date-to-text-input');
    expect(fromDateInput.value).toMatch(dateRegex);
    expect(toDateInput.value).toMatch(dateRegex);
    const selectedDatesLabels = getSelectedDatesLabels(container);
    expect(selectedDatesLabels).toEqual([]);
  });
  it('should accept date range', async () => {
    const fromDate = new Date('2019-01-10T00:00:00.000-08:00');
    const toDate = new Date('2019-01-15T00:00:00.000-08:00');
    renderWithTheme(getMockComponent({
      value: {
        from: fromDate,
        to: toDate
      }
    }));
    const fromDateInput = screen.getByTestId('date-from-text-input');
    const toDateInput = screen.getByTestId('date-to-text-input');
    expect(fromDateInput.value).toBe('2019/01/10');
    expect(toDateInput.value).toBe('2019/01/15');
    fireEvent.click(screen.getByText('Open calendar'));
    await waitFor(() => {
      expect(screen.getByTitle('Thu Jan 10, 2019')).toHaveAttribute('aria-selected', 'true');
    });
    expect(screen.getByTitle('Tue Jan 15, 2019')).toHaveAttribute('aria-selected', 'true');
  });
  it('should handle updates', () => {
    const onCustomChange = jest.fn();
    renderWithTheme(getMockComponent({
      onCustomChange
    }));
    const fromDateInput = screen.getByTestId('date-from-text-input');
    const toDateInput = screen.getByTestId('date-to-text-input');
    fireEvent.change(toDateInput, {
      target: {
        value: '2019/01/12'
      }
    });
    fireEvent.change(fromDateInput, {
      target: {
        value: '2019/01/11'
      }
    });
    expect(fromDateInput.value).toMatchInlineSnapshot(`"2019/01/11"`);
    expect(toDateInput.value).toMatchInlineSnapshot(`"2019/01/12"`);
  });
});
//# sourceMappingURL=RelativeTimeframeCustom.spec.js.map