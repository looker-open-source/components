const util = require('util')
const exec = util.promisify(require('child_process').exec)
const glob = util.promisify(require('glob'))
const writeFile = util.promisify(require('fs').writeFile)
const path = require('path')

// Paths to assets
const iconFileHelpers = require('./icon_file_helpers')

const TYPESCRIPT_COMPONENT_EXTENTION = 'tsx'
const TYPESCRIPT_DECLARATION_EXTENSION = 'd.ts'
const typescriptDeclaration = `import * as React from 'react'
const Icon: React.SFC<React.SVGAttributes<SVGElement>>
export default Icon
`

function typescriptIconFileDefinition(ComponentName) {
  return `import * as React from 'react'
import ${ComponentName} from '../glyphs/${ComponentName}'
export const Icon${ComponentName}: React.SFC<React.SVGAttributes<SVGElement>> = props => <${ComponentName} {...props}/>
`
}

function styleguidistIconMarkdown(ComponentName) {
  return `# Icon${ComponentName}

\`\`\`js
<Icon${ComponentName} />
\`\`\`
`
}

function styleguidistAllIconsMarkdown(ComponentNames) {
  const componentIconTags = ComponentNames.map(
    name => `<Icon${name} width="40" height="40" />`
  ).join('\n')
  return `# All Icons

\`\`\`js
${componentIconTags}
\`\`\`
`
}

async function getBasenames(globpath, ext) {
  const filenames = await glob(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

// Step 1: convert the SVG to React components using CLI `svgr` command.
// This by default converts all components to PascalCased filenames.
async function convertSVGToComponent() {
  const result = await exec(
    `yarn svgr --icon --ext ${iconFileHelpers.ICON_GLYPH_EXTENSION} -d ${
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

// Step 3: Generate Icon*.tsx component files from the icon component glyphs. These are the Typescript files Lens exports
// and are compatible with our Styleguidist documentation.
async function generateLensTypescriptIconComponents() {
  const basenames = await getBasenames(
    iconFileHelpers.ICON_GLYPH_PATH,
    iconFileHelpers.ICON_GLYPH_EXTENSION
  )
  await writeFile(
    path.join(iconFileHelpers.ICON_COMPONENTS_PATH, 'ALL_ICONS.md'),
    styleguidistAllIconsMarkdown(basenames)
  )
  await Promise.all(
    basenames.map(async name => {
      const iconFilename = path.join(
        iconFileHelpers.ICON_COMPONENTS_PATH,
        `Icon${name}.${TYPESCRIPT_COMPONENT_EXTENTION}`
      )
      const iconMarkdownFile = path.join(
        iconFileHelpers.ICON_COMPONENTS_PATH,
        `Icon${name}.md`
      )
      await writeFile(iconFilename, typescriptIconFileDefinition(name))
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
  await convertSVGToComponent()
  await generateTypescriptInterfaces()
  await generateLensTypescriptIconComponents()
  await updateChecksum()
}
run()
