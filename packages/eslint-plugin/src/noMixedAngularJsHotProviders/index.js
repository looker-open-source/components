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
const traverse = require('eslint-traverse');
const os = require('os');

// https://docs.angularjs.org/api/ng/type/angular.Module
const angularModuleMethods = {
  animation: false,
  component: true,
  config: false,
  constant: false,
  controller: true,
  decorator: false,
  directive: true,
  factory: false,
  filter: false,
  info: false,
  provider: false,
  run: false,
  service: false,
  value: false,
};

const ngModuleExpressions = new WeakMap();
function isNgModuleExpression(node) {
  if (ngModuleExpressions.has(node)) return ngModuleExpressions.get(node);
  if (node.type !== 'CallExpression') return false;

  const callee = node.callee;
  if (callee.type !== 'MemberExpression') return false;
  if (callee.computed) return false;

  // identifier or expression
  const object = callee.object;
  const methodName = callee.property.name;

  if (methodName === 'module' && object.name === 'angular') {
    ngModuleExpressions.set(node, true);
    return true;
  } else {
    // tail call
    return methodName in angularModuleMethods && isNgModuleExpression(object);
  }
}

module.exports = {
  'no-mixed-angularjs-hot-providers': {
    create(context) {
      let ngProviderNodes;
      return {
        Identifier(node) {
          const providerName = node.name;
          if (!(providerName in angularModuleMethods)) return;

          const parent = node.parent;
          if (parent.type !== 'MemberExpression') return;
          if (!isNgModuleExpression(parent.object)) return;

          const wrongProviderNodes = ngProviderNodes.filter(
            providerNode =>
              angularModuleMethods[providerNode.name] !==
              angularModuleMethods[providerName]
          );
          if (!wrongProviderNodes.length) return;

          if (angularModuleMethods[providerName]) {
            for (const wrongProviderNode of wrongProviderNodes) {
              context.report({
                data: {
                  coldProviderColumn: wrongProviderNode.loc.start.column,
                  coldProviderLine: wrongProviderNode.loc.start.line,
                  coldProviderName: wrongProviderNode.name,
                  hotProviderName: providerName,
                },
                messageId: 'hotWithCold',
                node,
              });
            }
          }
        },
        Program(programNode) {
          ngProviderNodes = [];

          // https://github.com/discord/eslint-traverse/pull/3
          //
          // eslint-traverse incorrectly assumes node is not null which causes
          // problems because [, test] will result in the empty destructure
          // being null and it attempts to read properties from it.
          try {
            traverse(context, programNode, ({ node }) => {
              if (!node) return;
              if (node.type !== 'Identifier') return;

              const providerName = node.name;
              if (!(providerName in angularModuleMethods)) return;

              const parent = node.parent;
              if (!parent) return;
              if (parent.type !== 'MemberExpression') return;
              if (!isNgModuleExpression(parent.object)) return;

              ngProviderNodes.push(node);
            });
          } catch (e) {
            const stack = e.stack.split(os.EOL).map(s => s.trim());
            const eslintTraverseBug = stack[1];
            if (!eslintTraverseBug.includes('eslint-traverse/index.js:24:55')) {
              throw e;
            }
          }
        },
      };
    },
    meta: {
      docs: {
        description:
          'Prevent mixing hot-loadable AngularJS providers with providers which require a full page refresh.',
        recommended: true,
      },
      messages: {
        hotWithCold:
          'Hot-loading of AngularJS provider method "{{ hotProviderName }}" is blocked by presence of non-hot-loadable provider method "{{ coldProviderName }}" (at {{ coldProviderLine }}:{{ coldProviderColumn }}) in the same file.',
      },
      schema: [
        {
          additionalProperties: false,
          properties: {
            exclude: {
              default: [],
              type: 'array',
            },
          },
          type: 'object',
        },
      ],
      type: 'problem',
    },
  },
};
