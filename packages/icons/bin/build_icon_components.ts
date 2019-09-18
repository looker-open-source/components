import childProcess from 'child_process'
import fs from 'fs'
import glob from 'glob'
import ora from 'ora'
import path from 'path'
import rimraf from 'rimraf'
import util from 'util'
const exec = util.promisify(childProcess.exec)
const globPromise = util.promisify(glob)
const mkdir = util.promisify(fs.mkdir)
const rimrafPromise = util.promisify(rimraf)
const writeFile = util.promisify(fs.writeFile)

/**
 * Constants for directory names, file extensions, etc
 */
const typescriptDeclarationExtension = 'd.ts'
const iconGlyphFileExtension = 'jsx'
const iconSrcPath = path.join('src', 'icons')
const iconBuildDirPath = path.join(iconSrcPath, 'build')
const iconSVGPath = path.join(iconSrcPath, 'svg')
const iconGlyphPath = path.join(iconSrcPath, 'build', 'glyphs')
const iconTemplatePath = path.join('bin', 'icons', 'icon_template.js')

async function getBasenames(globpath: string, ext: string) {
  const filenames = await globPromise(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

/**
 * Step 0: Clean up prior build.
 */
async function cleanGlyphsAndComponents() {
  await rimrafPromise(iconBuildDirPath)
  await mkdir(iconBuildDirPath)
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
    // tslint:disable-next-line no-console
    console.log(result.stderr)
    process.exit(1)
  }
}

/**
 * Step 2: Generate the correct typescript interfaces for the glyphs.
 */
async function generateTypescriptInterfaces() {
  const typescriptDeclaration = `import * as React from 'react'
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
  function generateGlyphFileIndexModule(componentNames: string[]) {
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
  function iconNameFile(icons: string[]) {
    const iconNames = icons
      .map(i => {
        return `'${i}'`
      })
      .join('|')

    return `export type IconNames = ${iconNames}`
  }

  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await writeFile(
    path.join(iconSrcPath, 'build', 'IconNames.ts'),
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
  function styleguidistAllIconsMarkdown(componentNames: string[]) {
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
    path.join(iconSrcPath, 'build', 'AllIcons.md'),
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
// tslint:disable-next-line no-console
run().catch(err => console.log(err))
