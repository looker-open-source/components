const startCase = require('lodash/startCase')

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const titleOverride = opts.titleProp
    ? `const title = props.title || '${startCase(
        opts.state.componentName.replace('Svg', '')
      )}'`
    : ''
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    ${imports}
    const ${componentName} = (props: React.SVGProps<SVGSVGElement> & { title?: string }) => {
      ${titleOverride}
      return ${jsx}
    }
    ${exports}
  `
}
module.exports = template
