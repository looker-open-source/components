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
const iconGlyphFileExtension = 'tsx'
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
 * Convert the SVG to React components using CLI `svgr` command.
 * This by default converts all components to PascalCased filenames.
 * The --title-prop flag adds a title tag and destructures a title prop (defaulted in icon-template to the filename in Start Case)
 * The --replace-attr-values flag is used to replace fills on exported svg files from Figma so Icon color can be changed
 */
async function convertSVGToComponent() {
  const result = await exec(
    `yarn svgr --typescript --title-prop --icon --ext ${iconGlyphFileExtension} \
    --replace-attr-values "#1C2125=currentColor"  \
    --template "${iconTemplatePath}" --out-dir "${iconGlyphPath}" "${iconSVGPath}"`
  )
  if (result.stderr) {
    /* eslint-enable-next-line no-console */
    console.log(result.stderr)
    process.exit(1)
  }
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
    const iconNames = icons.map(i => {
      return `'${i}'`
    })

    return `
export type IconNames = ${iconNames.join('|')}
export const iconNameList = [${iconNames.join(',')}]
`
  }

  const basenames = await getBasenames(iconGlyphPath, iconGlyphFileExtension)
  await writeFile(path.join(buildPath, 'IconNames.ts'), iconNameFile(basenames))
  return basenames
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
  await generateGlyphIndexFile()
  await generateIconNameFile()
  spinner.color = 'blue'
  spinner.succeed('Done building icons!')
  spinner.stop()
}
/* eslint-enable-next-line no-console */
run().catch(err => console.log(err))
