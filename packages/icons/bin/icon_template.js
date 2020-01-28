/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

const startCase = require('lodash/startCase')

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const titleOverride = opts.titleProp
    ? `const title = props.title || '${startCase(
        opts.state.componentName.replace('Svg', '')
      )}'
      const titleId = props.titleId`
    : ''
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    ${imports}
    const ${componentName} = (props: React.SVGProps<SVGSVGElement> & { title?: string, titleId?: string }) => {
      ${titleOverride}
      return ${jsx}
    }
    ${exports}
  `
}
module.exports = template
