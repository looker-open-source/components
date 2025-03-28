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

const meta = {
  docs: {
    description:
      'Enforces valid i18n message format. Strings must include a value, description, and properly formatted copy. Descriptions add context for localization teams to better translate copy.',
    recommended: true,
  },
  fixable: 'code',
  messages: {
    includeDescriptionProperty:
      'Include "description" property with helpful hint',
    includeValueProperty: 'Include "value" property with i18n message',
    includeObjectDescription:
      'Include "description" property with helpful hint. The value should be an object in the form of { "{{ key }}": { "value": "{{ copy }}", "description": "Contextual information about the copy" } }',
    noOtherProperties:
      'Avoid including message properties other than "value" and "description"',
    changeEmptyValue: 'Message value should not be empty',
    changeEmptyDescription: 'Include a helpful description',
    invalidCharactersInVariable:
      'Interpolated variables can only include alphanumeric characters and underscores',
  },
  type: 'problem',
};

const SAMPLE_COPY = 'My copy';

function replacementValue(copy, description = '') {
  return `{
    "value": "${copy}",
    "description": "${description}"
  }`;
}

function unquote(value) {
  return value.substring(1, value.length - 1);
}

const create = context => ({
  /**
   * @example
   * {
   *   "message1": "Copy 1"
   * }
   */
  'Program > JSONExpressionStatement > JSONObjectExpression > JSONProperty[value.type="JSONLiteral"]'(
    node
  ) {
    const key = node.key.name ?? node.key.value;

    const valueNode = node.value;
    const copy = unquote(valueNode.raw);

    context.report({
      data: { key, copy },
      messageId: 'includeObjectDescription',
      node,
      fix: fixer => fixer.replaceText(valueNode, replacementValue(copy)),
    });
  },

  /**
   * @example
   * {
   *   "message1": {
   *     "value": "Copy 1",
   *     "description": "Context for translators"
   *   }
   * }
   */
  'Program > JSONExpressionStatement > JSONObjectExpression > JSONProperty[value.type="JSONObjectExpression"]'(
    node
  ) {
    let foundValue = false;
    let value = '';

    let foundDescription = false;
    let description = '';

    const valueNode = node.value;
    for (const propertyNode of valueNode.properties) {
      const propertyKey = propertyNode.key.name ?? propertyNode.key.value;
      const propertyValue = unquote(propertyNode.value.raw);

      switch (propertyKey) {
        // "message1": { "value": ... }
        case 'value':
          foundValue = true;
          // Don't trim this since white space may be important.
          value = propertyValue;
          break;
        // "message1": { "description": ... }
        case 'description':
          foundDescription = true;
          description = propertyValue.trim();
          break;
        // "message1": { "other": ... }
        default:
          context.report({
            messageId: 'noOtherProperties',
            node: propertyNode,
            // todo: this doesn't remove any trailing commas
            // fix: fixer => fixer.replaceText(propertyNode, ''),
          });
          break;
      }
    }

    // "message1": { "description": "..." }
    if (!foundValue) {
      context.report({
        messageId: 'includeValueProperty',
        node: valueNode,
        fix: fixer =>
          fixer.replaceText(
            valueNode,
            replacementValue(SAMPLE_COPY, description)
          ),
      });
    } else if (value) {
      const matches = Array.from(
        value.matchAll(/(?<=\{\{)(?<key>.*?)(?=\}\})/g)
      );
      if (matches && matches.length) {
        matches.forEach(({ groups: { key } }) => {
          // Keys can only contain alphanumeric characters and underscores
          if (/[^\w\d_]/.test(key)) {
            context.report({
              messageId: 'invalidCharactersInVariable',
              node: valueNode,
            });
          }
        });
      }
    } else {
      context.report({
        messageId: 'changeEmptyValue',
        node: valueNode,
      });
    }

    // "message1": { "value": "..." }
    if (!foundDescription) {
      context.report({
        messageId: 'includeDescriptionProperty',
        node: valueNode,
        fix: fixer => fixer.replaceText(valueNode, replacementValue(value)),
      });
    }
    // Note: disabled until all messages have valid descriptions
    // else {
    // // "message1": { "description": "" }
    // if (!description || description.length === 0) {
    //   context.report({
    //     messageId: 'changeEmptyDescription',
    //     node: valueNode,
    //     fix: fixer => fixer.replaceText(valueNode, replacementValue(value)),
    //   });
    // }
    // }
  },
});

const rule = { create, meta };
const ruleName = 'i18n-format';

module.exports = {
  overrides: [
    {
      files: ['**/locales/en/*.strings.json'],
      plugins: ['@looker'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@looker/i18n-format': 'error',
      },
    },
  ],
  rules: {
    'i18n-format': rule,
  },
  rule,
  ruleName,
};
