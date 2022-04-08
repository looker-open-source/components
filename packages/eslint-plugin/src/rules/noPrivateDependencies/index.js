const { getPackagesSync } = require('@manypkg/get-packages')
const path = require('path')

module.exports = {
  meta: {
    docs: {
      description:
        'Prevent public packages from depending on private packages.',
      recommended: true,
    },
    messages: {
      invalidPackage:
        'Public package {{ dependent }} cannot depend on private package {{ dependency }}.',
    },
    type: 'problem',
    schema: [
      {
        type: 'object',
        properties: {
          exclude: {
            type: 'array',
            default: [],
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const [options] = context.options
    const filename = context.getFilename()

    if (path.basename(filename) !== 'package.json') {
      return {}
    }

    const json = require(filename)

    if (json.private) {
      return {}
    }

    const { packages } = getPackagesSync(process.cwd())

    return {
      'JSONProperty[key.value=/ependencies$/] JSONProperty'(node) {
        const dependency = node.key.value

        for (const { packageJson } of packages) {
          if (options.exclude.includes(dependency)) {
            continue
          }
          if (dependency === packageJson.name && packageJson.private) {
            context.report({
              node,
              messageId: 'invalidPackage',
              data: { dependency, dependent: json.name },
            })
          }
        }
      },
    }
  },
}
