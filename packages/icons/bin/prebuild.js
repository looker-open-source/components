#!/usr/bin/env node
/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

/**
 * NOTE: This script is heavily inspired by:
 * https://github.com/styled-icons/styled-icons/blob/main/tools/builder/generate-icon-package.js
 */

const fg = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const h2x = require('./h2x')

const getLicense = () =>
  new Promise((resolve, reject) =>
    fs.readFile(path.join('../../config/license-header.js'), (err, data) => {
      if (err) reject(err)
      else resolve(data.toString())
    })
  )

const getTemplate = () =>
  new Promise((resolve, reject) =>
    fs.readFile(path.join('templates', 'icon.tsx.template'), (err, data) => {
      if (err) reject(err)
      else resolve(data.toString())
    })
  )

const buildDir = path.join('src')

const iconIndex = (name, license) => `${license}
export * from './${name}'
`

const generate = async () => {
  const files = await fg(['svg/*.svg'])
  const icons = files.map((icon) =>
    icon.replace('.svg', '').replace('svg/', '')
  )

  if (icons.length === 0) {
    console.error('Error reading icons from source')
    process.exit(1)
  } else {
    console.log('SVG files found:', icons.length)
  }

  const template = await getTemplate()
  const license = await getLicense()

  const totalIcons = icons.length

  for (const icon of icons) {
    const state = {}

    let result = fs
      .readFileSync(path.join('svg', `${icon}.svg`))
      .toString('utf8')
    result = await h2x(result, state).join('\n      ')

    /**
     * @TODO - Height & width should be extracted from SVG
     */
    height = state.height || '24'
    width = state.width || '24'
    viewBox = state.viewBox || `0 0 ${width} ${height}`

    const attrs = { fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' }

    // for (const attr of SVG_ATTRS) {
    //   if (attr in icon.attrs) {
    //     attrs[fastCase.camelize(attr)] = state.attrs[attr]
    //   }
    // }

    const component = () =>
      template
        .replace(/{{license}}/g, license)
        .replace(/{{attrs}}/g, JSON.stringify(attrs, null, 2).slice(2, -2))
        .replace(/{{name}}/g, icon)
        .replace(/{{svg}}/g, result)
        .replace(/{{verticalAlign}}/g, 'middle')
        .replace(/{{height}}/g, height)
        .replace(/{{width}}/g, width)
        .replace(/{{viewBox}}/g, viewBox)

    const destinationPath = path.join(buildDir)
    await fs.mkdirp(destinationPath, icon)
    await fs.outputFile(
      path.join(destinationPath, icon, `${icon}.tsx`),
      component()
    )
    await fs.outputFile(
      path.join(destinationPath, icon, 'index.ts'),
      iconIndex(icon, license)
    )
  }

  const writeIndexFiles = async () =>
    await fs.outputFile(
      path.join(buildDir, 'index.ts'),
      `${license}
${icons
  .map((icon) => `export { ${icon} } from './${icon}'`)
  .filter((lines) => lines)
  .join('\n')}
`
    )

  await writeIndexFiles()
  console.log(`${totalIcons} icons generated!`)
}

generate().catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
