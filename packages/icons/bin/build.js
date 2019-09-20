const util = require('util')
const exec = util.promisify(require('child_process').exec)
const globPromise = util.promisify(require('glob'))
const mkdir = util.promisify(require('fs').mkdir)
const rimrafPromise = util.promisify(require('rimraf'))
const writeFile = util.promisify(require('fs').writeFile)
const path = require('path')
const ora = require('ora')

/**
 * Constants for directory names, file extensions, etc
 */
const typescriptDeclarationExtension = 'd.ts'
const iconGlyphFileExtension = 'jsx'
const packageSrcPath = path.join('src')
const buildPath = path.join(packageSrcPath, 'generated')
const iconTemplatePath = path.join('bin', 'icon_template.js')
const iconSVGPath = path.join(packageSrcPath, 'svg')
const iconGlyphPath = path.join(buildPath, 'glyphs')

// typescript (globpath: string, ext: string)
async function getBasenames(globpath, ext) {
  const filenames = await globPromise(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

/**
 * Step 0: Clean up prior build.
 */
async function cleanGlyphsAndComponents() {
  await rimrafPromise(buildPath)
  await mkdir(buildPath)
}

/**
 * Step 1: convert the SVG to React components using CLI `svgr` command.
 * This by default converts all components to PascalCased filenames.
 * The --title-prop flag adds a title tag and destructures a title prop (defaulted in icon-template to the filename in Start Case)
 * The --replace-attr-values flag is used to replace fills on exported svg files from Figma so Icon color can be changed
 */
async function convertSVGToComponent() {
  const result = await exec(
    `yarn svgr --title-prop --icon --ext ${iconGlyphFileExtension} \
    --replace-attr-values "#1C2125=currentColor"  \
    --template "${iconTemplatePath}" --out-dir "${iconGlyphPath}" "${iconSVGPath}"`
  )
  if (result.stderr) {
    /* eslint-enable-next-line no-console */
    console.log(result.stderr)
    process.exit(1)
  }
}

/**
 * Step 2: Generate the correct typescript interfaces for the glyphs.
 */
async function generateTypescriptInterfaces() {
  const typescriptDeclaration = `import React from 'react'
const Icon: React.FC<React.SVGAttributes<SVGElement>>
export default Icon
`

  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await Promise.all(
    basenames.map(async name => {
      const declarationFilename = path.join(
        iconGlyphPath,
        `${name}.${typescriptDeclarationExtension}`
      )
      return writeFile(declarationFilename, typescriptDeclaration)
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
  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await writeFile(
    path.join(iconGlyphPath, 'index.ts'),
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

  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await writeFile(path.join(buildPath, 'IconNames.ts'), iconNameFile(basenames))
  return basenames
}

/**
 * Step 3: Generate Icon*.tsx component files from the icon component glyphs.
 * These are the Typescript files Lens exports and are compatible with our
 * Styleguidist documentation.
 */
// ts: string[]
async function generateMarkdownFileForAllIcons() {
  function styleguidistAllIconsMarkdown(componentNames) {
    const componentIconTags = componentNames
      .map(
        name => `
        <CopyToClipboard
          text={'<Icon name="${name}" />'}
          onCopy={() => alert('Copied icon "${name}" to clipboard.')}
        >
          <Box display="inline-block" px="xsmall" py="medium" width="16.66667%" textAlign="center">
            <Icon name="${name}" size={32} />
            <Paragraph mt="small" fontSize="xsmall" variant="secondary">${name}</Paragraph>
          </Box>
        </CopyToClipboard>`
      )
      .join('\n')
    return `
To use an Icon you pass the name of the icon to the \`name\` property on the \`<Icon />\` component
\`\`\`js
import { Icon } from '../../components/Icon'
import { Box } from '../../components/Box';
<Box>
  <Icon name="Check" size={24} />
  <Icon name="Favorite" size={24} color="palette.red400" />
  <Icon name="GearOutline" size={32} color="palette.charcoal500"/>
</Box>
\`\`\`

# All Icons

**Tip: ** you can click an icon below to copy it to your clipboard.

\`\`\`js noeditor
import { Icon } from '../../components/Icon'
import { Box } from '../../components/Box'
import { Paragraph } from '../../components/Text/Paragraph'
const CopyToClipboard = require('react-copy-to-clipboard');

<div>
${componentIconTags}
</div>
\`\`\`
  `
  }
  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await writeFile(
    path.join(buildPath, 'AllIcons.md'),
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
  // await generateIndexDefinition()
  await generateIconNameFile()
  spinner.color = 'blue'
  spinner.text = 'Compiling All Icons in Markdown...'
  await generateMarkdownFileForAllIcons()
  spinner.succeed('Done building icons!')
  spinner.stop()
}
/* eslint-enable-next-line no-console */
run().catch(err => console.log(err))
