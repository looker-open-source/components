const startCase = require('lodash/startCase')

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const titleOverride = opts.titleProp
    ? `title = title || '${startCase(
        opts.state.componentName.replace('Svg', '')
      )}'`
    : ''
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => {
      ${titleOverride}
      return ${jsx}
    }
    ${exports}
  `
}
module.exports = template
