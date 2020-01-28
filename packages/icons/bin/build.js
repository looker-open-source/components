/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const globPromise = util.promisify(require('glob'))
const mkdir = util.promisify(require('fs').mkdir)
const rimrafPromise = util.promisify(require('rimraf'))
const writeFile = util.promisify(require('fs').writeFile)
const rename = util.promisify(require('fs').rename)
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

async function renameGlyphIndexFile() {
  // Rename auto-generated index from `.tsx` to `.ts`
  await rename(
    path.join(iconGlyphPath, 'index.tsx'),
    path.join(iconGlyphPath, 'index.ts')
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
  await renameGlyphIndexFile()
  await generateIconNameFile()
  spinner.color = 'blue'
  spinner.succeed('Done building icons!')
  spinner.stop()
}
/* eslint-enable-next-line no-console */
run().catch(err => console.log(err))
