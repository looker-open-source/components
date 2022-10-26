import { render } from '@testing-library/react';
import React from 'react';
import ar from 'date-fns/locale/ar-SA';
import { DateTimeFormat } from './DateTimeFormat';
const date = new Date('January 25, 1988 11:58:03');
describe('DateTimeFormat', () => {
  test('renders', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, null, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        Jan 25, 1988, 11:58:03 AM
      </div>
    `);
  });
  test('specific locale', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, {
      locale: ar
    }, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        ينا 25, 1988, 11:58:03 ص
      </div>
    `);
  });
  test('displays timeZone prop if one is passed', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, {
      timeZone: "Asia/Kolkata"
    }, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        Jan 26, 1988, 1:28:03 AM GMT+5:30
      </div>
    `);
  });
  test('format prop short if one is passed', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, {
      format: "short"
    }, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        01/25/1988, 11:58 AM
      </div>
    `);
  });
  test('format prop long if one is passed', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, {
      format: "long"
    }, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        January 25th, 1988 at 11:58:03 AM GMT-8
      </div>
    `);
  });
  test('format prop full if one is passed', () => {
    const {
      container
    } = render(React.createElement(DateTimeFormat, {
      format: "full"
    }, date));
    expect(container).toMatchInlineSnapshot(`
      <div>
        Monday, January 25th, 1988 at 11:58:03 AM GMT-08:00
      </div>
    `);
  });
});
//# sourceMappingURL=DateTimeFormat.spec.js.map