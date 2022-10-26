import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import map from 'lodash/map';
import { InputTimeSelect } from './InputTimeSelect';
jest.mock('lodash/throttle', () => fn => fn);
const realDateNow = Date.now.bind(global.Date);
const realScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  global.Date.now = jest.fn(() => 1580567580000);
});
afterEach(() => {
  global.Date.now = realDateNow;
  window.HTMLElement.prototype.scrollIntoView = realScrollIntoView;
  jest.resetAllMocks();
});

const extractTextFromDomList = list => {
  const options = list.getElementsByTagName('li');
  return map(options, el => {
    return el.textContent;
  });
};

const renderListContent = props => {
  renderWithTheme(React.createElement(InputTimeSelect, props));
  const inputBox = screen.getByPlaceholderText('Select time');
  fireEvent.click(inputBox);
  const domList = screen.getByRole('listbox');
  return domList;
};

describe('prop: format', () => {
  test('formats options in 12 hour time', () => {
    const view = renderListContent({
      format: '12h'
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('formats options in 24 hour time', () => {
    const view = renderListContent({
      format: '24h'
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
});
describe('prop: interval', () => {
  test('renders 5-minute intervals', () => {
    const view = renderListContent({
      interval: 5
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('renders 10-minute intervals', () => {
    const view = renderListContent({
      interval: 10
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('renders 15-minute intervals', () => {
    const view = renderListContent({
      interval: 15
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('renders 20-minute intervals', () => {
    const view = renderListContent({
      interval: 20
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('renders 30-minute intervals', () => {
    const view = renderListContent({
      interval: 30
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
  test('renders 60-minute intervals', () => {
    const view = renderListContent({
      interval: 60
    });
    expect(extractTextFromDomList(view)).toMatchSnapshot();
    fireEvent.click(document);
  });
});
describe('text input', () => {
  test('converts shorthand input to 24h formatted string on change', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(InputTimeSelect, {
      onChange: handleChange
    }));
    expect(handleChange).not.toHaveBeenCalled();
    const inputBox = screen.getByPlaceholderText('Select time');
    fireEvent.click(inputBox);
    fireEvent.change(inputBox, {
      target: {
        value: '2pm'
      }
    });
    fireEvent.keyDown(inputBox, {
      key: 'Enter'
    });
    expect(handleChange).toHaveBeenLastCalledWith('14:00');
    fireEvent.change(inputBox, {
      target: {
        value: '3:3'
      }
    });
    fireEvent.keyDown(inputBox, {
      key: 'Tab'
    });
    expect(handleChange).toHaveBeenLastCalledWith('03:03');
    fireEvent.click(document);
  });
});
describe('keyboard nav ux', () => {
  test('highlights closest time to now when an unselected list is opened', () => {
    const view = renderListContent({});
    const selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot(`"06:30 am"`);
    fireEvent.click(document);
  });
  test('highlights selected value when list is opened', () => {
    const view = renderListContent({
      onChange: jest.fn(),
      value: '14:15'
    });
    const selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot(`"02:15 pm"`);
    fireEvent.click(document);
  });
  test('highlights closest time to selected value when list is opened but value does not match provided options', () => {
    const view = renderListContent({
      onChange: jest.fn(),
      value: '16:38'
    });
    const selected = view.querySelector('[aria-selected="true"]');
    expect(selected.textContent).toMatchInlineSnapshot(`"04:45 pm"`);
    fireEvent.click(document);
  });
});
//# sourceMappingURL=InputTimeSelect.spec.js.map