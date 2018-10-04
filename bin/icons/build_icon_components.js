const util = require('util')
const exec = util.promisify(require('child_process').exec)
const glob = util.promisify(require('glob'))
const mkdir = util.promisify(require('fs').mkdir)
const rimraf = util.promisify(require('rimraf'))
const writeFile = util.promisify(require('fs').writeFile)
const path = require('path')
const ora = require('ora')
const prettier = require('prettier')
const prettierConfig = require('../../.prettierrc.json')

// Paths to assets
const iconFileHelpers = require('./icon_file_helpers')

const TYPESCRIPT_COMPONENT_EXTENSION = 'tsx'
const TYPESCRIPT_DECLARATION_EXTENSION = 'd.ts'
const typescriptDeclaration = `import * as React from 'react'
const Icon: React.SFC<React.SVGAttributes<SVGElement>>
export default Icon
`

function typescriptIconFileDefinition(componentName) {
  return `import * as React from 'react'
import ${componentName} from '../glyphs/${componentName}'
export const Icon${componentName}: React.SFC<React.SVGAttributes<SVGElement>> = props => <${componentName} {...props}/>
`
}

function componentBaseNameToIconName(baseName) {
  return `Icon${baseName}`
}

function styleguidistIconMarkdown(componentName) {
  const iconName = componentBaseNameToIconName(componentName)
  return `# ${iconName}

\`\`\`js
<${iconName} />
\`\`\`
`
}

function styleguidistAllIconsMarkdown(componentNames) {
  const componentIconTags = componentNames
    .map(
      name => `<${componentBaseNameToIconName(name)} width="40" height="40" />`
    )
    .join('\n')
  return `# All Icons

\`\`\`js
${componentIconTags}
\`\`\`
`
}

function exportIconFiles(componentNames) {
  return (
    componentNames
      .map(name => {
        const iconName = componentBaseNameToIconName(name)
        return `export { ${iconName} } from './${iconName}'`
      })
      .join('\n') + '\n'
  )
}

async function getBasenames(globpath, ext) {
  const filenames = await glob(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

// Step 0: clean up
async function cleanGlyphsAndComponents() {
  await rimraf(iconFileHelpers.ICON_GLYPH_PATH)
  await rimraf(iconFileHelpers.ICON_COMPONENTS_PATH)
  await mkdir(iconFileHelpers.ICON_GLYPH_PATH)
  await mkdir(iconFileHelpers.ICON_COMPONENTS_PATH)
}

// Step 1: convert the SVG to React components using CLI `svgr` command.
// This by default converts all components to PascalCased filenames.
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

// Step 2: Generate the correct typescript interfaces
async function generateTypescriptInterfaces() {
  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await Promise.all(
    basenames.map(async name => {
      const declarationFilename = path.join(
        iconFileHelpers.ICON_GLYPH_PATH,
        `${name}.${TYPESCRIPT_DECLARATION_EXTENSION}`
      )
      return await writeFile(declarationFilename, typescriptDeclaration)
    })
  )
}

// Step 3: Generate Icon*.tsx component files from the icon component glyphs.
// These are the Typescript files Lens exports and are compatible with our
// Styleguidist documentation.
async function generateLensTypescriptIconComponents() {
  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_COMPONENTS_PATH, 'ALL_ICONS.md'),
    styleguidistAllIconsMarkdown(basenames)
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_COMPONENTS_PATH, 'index.tsx'),
    exportIconFiles(basenames)
  )
  await Promise.all(
    basenames.map(async name => {
      const iconFilename = path.join(
        iconFileHelpers.ICON_COMPONENTS_PATH,
        `${componentBaseNameToIconName(name)}.${TYPESCRIPT_COMPONENT_EXTENSION}`
      )
      const iconMarkdownFile = path.join(
        iconFileHelpers.ICON_COMPONENTS_PATH,
        `${componentBaseNameToIconName(name)}.md`
      )
      await writeFile(
        iconFilename,
        prettier.format(
          typescriptIconFileDefinition(name),
          Object.assign({}, prettierConfig, { parser: 'typescript' })
        )
      )
      return await writeFile(iconMarkdownFile, styleguidistIconMarkdown(name))
    })
  )
}

// Step 4: Update the md5 checksum for the src/icons/svg directory to ensure
// our tests pass.
async function updateChecksum() {
  const svgFileChecksum = await iconFileHelpers.getFilesChecksum(
    iconFileHelpers.ICON_SVG_PATH,
    'svg'
  )
  return await writeFile(
    iconFileHelpers.ICON_SVG_CHECKSUM_FILE_PATH,
    JSON.stringify({ iconChecksum: svgFileChecksum })
  )
}

// Step 5: Actually run everything in order
async function run() {
  const spinner = ora('Cleaning icons...')
  spinner.color = 'magenta'
  spinner.start()
  await cleanGlyphsAndComponents()
  spinner.color = 'cyan'
  spinner.text = 'Converting SVG to components...'
  await convertSVGToComponent()
  spinner.color = 'green'
  spinner.text = 'Generating Typescript Interfaces...'
  await generateTypescriptInterfaces()
  spinner.color = 'blue'
  spinner.text = 'Generating Typescript Components...'
  await generateLensTypescriptIconComponents()
  spinner.color = 'white'
  spinner.text = 'Updating checksum...'
  await updateChecksum()
  spinner.succeed('Done building icons!')
  spinner.stop()
}
run()
