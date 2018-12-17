const util = require('util')
const exec = util.promisify(require('child_process').exec)
const glob = util.promisify(require('glob'))
const mkdir = util.promisify(require('fs').mkdir)
const rimraf = util.promisify(require('rimraf'))
const writeFile = util.promisify(require('fs').writeFile)
const path = require('path')
const ora = require('ora')

/**
 * Constants for directory names, file extensions, etc
 */
const typescriptDeclarationExtension = 'd.ts'
const iconGlyphFileExtension = 'jsx'
const iconSrcPath = path.join(__dirname, '..', '..', 'src', 'icons')
const iconBuildDirPath = path.join(iconSrcPath, 'build')
const iconSVGPath = path.join(iconSrcPath, 'svg')
const iconGlyphPath = path.join(iconSrcPath, 'build', 'glyphs')

async function getBasenames(globpath, ext) {
  const filenames = await glob(path.join(globpath, `*.${ext}`))
  const basenames = filenames.map(n => path.basename(n, `.${ext}`))
  basenames.sort()
  return basenames
}

/**
 * Step 0: Clean up prior build.
 */
async function cleanGlyphsAndComponents() {
  await rimraf(iconBuildDirPath)
  await mkdir(iconBuildDirPath)
}

/**
 * Step 1: convert the SVG to React components using CLI `svgr` command.
 * This by default converts all components to PascalCased filenames.
 */
async function convertSVGToComponent() {
  const result = await exec(
    `yarn svgr --icon --ext ${iconGlyphFileExtension} --out-dir ${iconGlyphPath} ${iconSVGPath}`
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

  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await Promise.all(
    basenames.map(async name => {
      const declarationFilename = path.join(
        iconGlyphPath,
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
  function styleguidistAllIconsMarkdown(componentNames) {
    const componentIconTags = componentNames
      .map(
        name => `
        <CopyToClipboard
          text={'<Icon name="${name}" />'}
          onCopy={() => alert('copied ${name} to clipboard')}
        >
          <Box display="inline-block" px="xsmall" py="medium" width="16.66667%" textAlign="center">
            <Icon name="${name}" size={32} />
            <Paragraph size="xsmall" variant="secondary">${name}</Paragraph>
          </Box>
        </CopyToClipboard>`
      )
      .join('\n')
    return `
To use an Icon you pass the name of the icon to the \`name\` property on the \`<Icon />\` compnent
\`\`\`js
 <Icon name="Check" size={24} />
 <Icon name="Favorite" size={24} />
 <Icon name="GearOutline" size={24} />
\`\`\`

# All Icons

*Tip: * you can click an icon below to copy it to your clipboard.

\`\`\`js noeditor
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
run()
