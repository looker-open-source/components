/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import path from 'path'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { StoryshotsOptions } from '@storybook/addon-storyshots/dist/api/StoryshotsOptions'

export const storyshotsConfig = (pkg: string) => {
  const storybookUrl = `file:///${path.resolve(pkg, 'storybook-static')}`

  return {
    configPath: `${pkg}/.storybook`,
    framework: 'react',
    test: imageSnapshot({
      beforeScreenshot: async (page, { context }) => {
        const { viewport } = context.parameters
        const pageViewport = page.viewport()
        if (viewport) {
          const defaultViewport = viewport.viewports[viewport.defaultViewport]
          await page.setViewport({
            height: parseInt(defaultViewport.styles.height, 10),
            width: parseInt(defaultViewport.styles.width, 10),
          })
          await page.waitForTimeout(500)
        } else if (pageViewport.width !== 800 || pageViewport.height !== 600) {
          await page.setViewport({
            height: 600,
            width: 800,
          })
          await page.waitForTimeout(500)
        }

        ;(context as any).clip = await page.evaluate(() => {
          const backdrop = document.querySelector(
            '#modal-root [data-testid="backdrop"]'
          )

          const { height, width, left: x, top: y } = (
            backdrop || document.body
          ).getBoundingClientRect()

          return { height, width, x, y }
        })
      },

      getMatchOptions({ context: { kind, story } }) {
        return {
          customSnapshotIdentifier: story,
          customSnapshotsDir: path.join(pkg, 'snapshots', ...kind.split('/')),
        }
      },
      getScreenshotOptions: ({ context }) => {
        const { clip } = context as any

        return { clip, encoding: 'base64', fullPage: false }
      },

      storybookUrl,
    }),
  } as StoryshotsOptions
}
