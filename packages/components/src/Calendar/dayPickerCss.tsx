/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { css } from 'styled-components'

/**
 * This is copied from `react-day-picker/lib/style.css` to prevent the need to
 * use a CSS-loader
 */

export const dayPickerCss = css`
  /* DayPicker styles */

  .DayPicker {
    display: inline-block;
    font-size: 1rem;
  }

  .DayPicker-wrapper {
    flex-direction: row;
    /* padding-bottom: 1rem; */
    position: relative;
    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    border-collapse: collapse;
    border-spacing: 0;
    display: table;
    /* margin: 0 1rem; */
    margin-top: 1rem;
    user-select: none;
  }

  .DayPicker-NavButton {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    color: #8b9898;
    cursor: pointer;
    display: inline-block;
    height: 1.25rem;
    left: auto;
    margin-top: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    width: 1.25rem;
  }

  .DayPicker-NavButton:hover {
    opacity: 0.8;
  }

  .DayPicker-NavButton--prev {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
    margin-right: 1.5rem;
  }

  .DayPicker-NavButton--next {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    text-align: left;
  }

  .DayPicker-Caption > div {
    font-size: 1.15rem;
    font-weight: 500;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1rem;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    color: #8b9898;
    display: table-cell;
    font-size: 0.875rem;
    padding: 0.5rem;
    text-align: center;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    border-radius: 50%;
    cursor: pointer;
  }

  .DayPicker-WeekNumber {
    border-right: 1px solid #eaecec;
    color: #8b9898;
    cursor: pointer;
    display: table-cell;
    font-size: 0.75rem;
    min-width: 1rem;
    padding: 0.5rem;
    text-align: right;
    vertical-align: middle;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    padding-top: 0.5rem;
  }

  .DayPicker-TodayButton {
    background-color: transparent;
    background-image: none;
    border: none;
    box-shadow: none;
    color: #4a90e2;
    cursor: pointer;
    font-size: 0.875rem;
  }

  /* Default modifiers */

  .DayPicker-Day--today {
    color: #d0021b;
    font-weight: bold;
  }

  .DayPicker-Day--outside {
    color: #8b9898;
    cursor: default;
  }

  .DayPicker-Day--disabled {
    color: #dce0e0;
    cursor: default;
    /* background-color: #eff1f1; */
  }

  /* Example modifiers */

  .DayPicker-Day--sunday {
    background-color: #f7f8f8;
  }

  .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
    color: #dce0e0;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #4a90e2;
    color: #f0f8ff;
    position: relative;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: #51a0fa;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: #f0f8ff;
  }

  /* DayPickerInput */

  .DayPickerInput {
    display: inline-block;
  }

  .DayPickerInput-OverlayWrapper {
    position: relative;
  }

  .DayPickerInput-Overlay {
    background: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    left: 0;
    position: absolute;
    z-index: 1;
  }
`
