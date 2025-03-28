/*

 MIT License

 Copyright (c) 2023 Google LLC

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

const { RuleTester } = require('eslint');
const { rule, ruleName } = require('.');

const test = (name, testCase) => ({ name, ...testCase });

const ruleTester = new RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
});

ruleTester.run(ruleName, rule, {
  valid: [
    test('single key with value and description', {
      code: `
{
  "Key1": {
    "value": "Message 1",
    "description": "Message shows on the home page under the heading"
  }
}
    `,
    }),

    test('message variable with valid characters', {
      code: `
{
  "Key1": {
    "value": "Number of things: {{things_1}}",
    "description": "Contextual information about the copy"
  }
}
    `,
    }),
  ],
  invalid: [
    test('message key with string literal value', {
      code: `
{
  "Key1": "Message 1"
}
    `,
      errors: [{ messageId: 'includeObjectDescription' }],
      output: `
{
  "Key1": {
    "value": "Message 1",
    "description": ""
  }
}
    `,
    }),

    test('message key with extra property', {
      code: `
{
  "Key1": {
    "value": "Message 1",
    "description": "Copy 1",
    "other": "Invalid property"
  }
}
    `,
      errors: [{ messageId: 'noOtherProperties' }],
    }),

    test('message key with missing value property', {
      code: `
{
  "Key1": {
    "description": "Copy 1",
  }
}
    `,
      errors: [{ messageId: 'includeValueProperty' }],
      output: `
{
  "Key1": {
    "value": "My copy",
    "description": "Copy 1"
  }
}
    `,
    }),

    test('message key with missing description property', {
      code: `
{
  "Key1": {
    "value": "Message 1"
  }
}
    `,
      errors: [{ messageId: 'includeDescriptionProperty' }],
      output: `
{
  "Key1": {
    "value": "Message 1",
    "description": ""
  }
}
    `,
    }),

    test('message with empty value', {
      code: `
{
  "Key1": {
    "value": "",
    "description": "Contextual information about the copy"
  }
}
    `,
      errors: [{ messageId: 'changeEmptyValue' }],
    }),

    test('message variable with invalid characters', {
      code: `
{
  "Key1": {
    "value": "Number of things: {{things.length}}",
    "description": "Contextual information about the copy"
  }
}
    `,
      errors: [{ messageId: 'invalidCharactersInVariable' }],
    }),
  ],
});
