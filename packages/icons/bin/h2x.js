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

/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * NOTE: This is highly inspired by:
 * https://github.com/styled-icons/styled-icons/blob/main/tools/builder/transform
 */

const { transform } = require('h2x-core')
const { fromHtmlElement } = require('h2x-types')
const jsx = require('h2x-plugin-jsx').default

const extractChildren = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        if (path.node.originalNode.tagName !== 'svg') return
        state.children = Array.from(path.node.originalNode.childNodes)
      },
    },
  },
})

const replaceChildren = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        if (path.node.originalNode.tagName !== 'svg') return
        path.replace(fromHtmlElement(state.replacement))
      },
    },
  },
})

const stripAttribute = (attribute) => () => ({
  visitor: {
    JSXAttribute: {
      enter(path) {
        if (path.node.name === attribute) {
          path.remove()
        }
      },
    },
  },
})

const removeComments = () => ({
  visitor: {
    JSXComment: {
      enter(path) {
        path.remove()
      },
    },
  },
})

const removeStyle = () => ({
  visitor: {
    JSXElement: {
      enter(path) {
        if (path.node.name === 'style') {
          path.remove()
        }
      },
    },
  },
})

const processSVG = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        if (path.node.originalNode.tagName === 'svg') {
          const attributes = Array.from(path.node.originalNode.attributes)

          state.attrs = attributes.reduce(
            (attrs, attr) => ({ ...attrs, [attr.name]: attr.value }),
            {}
          )

          const heightAttribute = attributes.find(
            (attr) => attr.name === 'height'
          )
          const widthAttribute = attributes.find(
            (attr) => attr.name === 'width'
          )
          const viewBoxAttribute = attributes.find(
            (attr) => attr.name === 'viewBox'
          )

          state.height = heightAttribute ? heightAttribute.value : null
          state.width = widthAttribute ? widthAttribute.value : null
          state.viewBox = viewBoxAttribute ? viewBoxAttribute.value : null

          state.children = Array.from(path.node.originalNode.children)
        }
      },
    },
  },
})

module.exports = (code, state) => {
  // First pass to extract out attributes and children
  transform(code, { plugins: [extractChildren, processSVG], state })

  // Second pass over the extracted children
  return state.children.map((replacement) =>
    transform('<svg />', {
      plugins: [
        replaceChildren,
        jsx,
        stripAttribute('xmlns'),
        stripAttribute('path'),
        stripAttribute('fill'),
        removeComments,
        removeStyle,
      ],
      state: { replacement },
    })
  )
}
