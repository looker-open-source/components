const util = require('util')
const exec = util.promisify(require('child_process').exec)
const glob = util.promisify(require('glob'))
const mkdir = util.promisify(require('fs').mkdir)
const rimraf = util.promisify(require('rimraf'))
const writeFile = util.promisify(require('fs').writeFile)
const path = require('path')
const ora = require('ora')
const iconFileHelpers = require('./icon_file_helpers')
const typescriptDeclarationExtension = 'd.ts'

async function getBasenames(globpath, ext) {
  const filenames = await glob(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

/**
 * Step 0: clean up
 */
async function cleanGlyphsAndComponents() {
  await rimraf(iconFileHelpers.ICON_GLYPH_PATH)
  await rimraf(iconFileHelpers.ICON_COMPONENTS_PATH)
  await mkdir(iconFileHelpers.ICON_GLYPH_PATH)
  await mkdir(iconFileHelpers.ICON_COMPONENTS_PATH)
}

/**
 * Step 1: convert the SVG to React components using CLI `svgr` command.
 * This by default converts all components to PascalCased filenames.
 */
async function convertSVGToComponent() {
  const result = await exec(
    `yarn svgr --icon --ext ${iconFileHelpers.ICON_GLYPH_EXTENSION} --out-dir ${
      iconFileHelpers.ICON_GLYPH_PATH
    } ${iconFileHelpers.ICON_SVG_PATH}`
  )
  if (result.stderr) {
    console.log(result.stderr)
    process.exit(1)
  }
}

/**
 * Step 2: Generate the correct typescript interfaces for the glyphs.
 */
async function generateTypescriptInterfaces() {
  const typescriptDeclaration = `import * as React from 'react'
const Icon: React.SFC<React.SVGAttributes<SVGElement>>
export default Icon
`

  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await Promise.all(
    basenames.map(async name => {
      const declarationFilename = path.join(
        iconFileHelpers.ICON_GLYPH_PATH,
        `${name}.${typescriptDeclarationExtension}`
      )
      return await writeFile(declarationFilename, typescriptDeclaration)
    })
  )
}

async function generateGlyphIndexFile() {
  function generateGlyphFileIndexModule(componentNames) {
    return (
      componentNames
        .map(name => {
          return `export { default as ${name} } from './${name}'`
        })
        .join('\n') + '\n'
    )
  }
  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_GLYPH_PATH, 'index.ts'),
    generateGlyphFileIndexModule(basenames)
  )
}

async function generateIconNameFile() {
  function iconNameFile(icons) {
    const iconNames = icons
      .map(i => {
        return `'${i}'`
      })
      .join('|')

    return `export type IconNames = ${iconNames}`
  }

  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_SRC_PATH, 'IconNames.ts'),
    iconNameFile(basenames)
  )
  return basenames
}

/**
 * Step 3: Generate Icon*.tsx component files from the icon component glyphs.
 * These are the Typescript files Lens exports and are compatible with our
 * Styleguidist documentation.
 */
async function generateMarkdownFileForAllIcons() {
  function styleguidistAllIconsMarkdown(componentNames) {
    const componentIconTags = componentNames
      .map(name => `<Icon name="${name}" size={32} />`)
      .join('\n')
    return `# All Icons

\`\`\`js
${componentIconTags}
\`\`\`
  `
  }
  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_SRC_PATH, 'AllIcons.md'),
    styleguidistAllIconsMarkdown(basenames)
  )
}

async function run() {
  const spinner = ora('Cleaning icons...')
  spinner.color = 'magenta'
  spinner.start()
  await cleanGlyphsAndComponents()
  spinner.color = 'cyan'
  spinner.text = 'Converting SVG to components...'
  await convertSVGToComponent()
  spinner.color = 'green'
  spinner.text = 'Exporting Glyphs and generating Typescript interfaces...'
  await generateTypescriptInterfaces()
  await generateGlyphIndexFile()
  await generateIconNameFile()
  spinner.color = 'blue'
  spinner.text = 'Compiling All Icons in Markdown...'
  await generateMarkdownFileForAllIcons()
  spinner.succeed('Done building icons!')
  spinner.stop()
}
run()
