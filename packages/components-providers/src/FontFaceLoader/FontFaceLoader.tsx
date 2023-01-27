/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTheme } from 'styled-components'
import type { FontSources } from '@looker/design-tokens'

export const fontFacesCSS = (fontSources: FontSources) =>
  fontSources
    .map(({ face, url }) => (face ? fontFace(face, url) : importFont(url)))
    .join('\n')

export const importFont = (url: string) => `
@import url(${url});`

export const fontFace = (face: string, url: string) => `
@font-face {
  font-family: ${face};
  src: url('${url}');
}`

/**
 * FontFaceLoader injects font @font-face imports into a style tag on the page's <HEAD>
 * Font sources are determined using the fontSources key on the theme
 */
export const FontFaceLoader = () => {
  const { fontSources } = useTheme()

  const css = useMemo(() => {
    if (fontSources && fontSources.length > 0) {
      return fontFacesCSS(fontSources)
    } else {
      return null
    }
  }, [fontSources])

  return css === null ? null : (
    <Helmet>
      <style type="text/css">{css}</style>
    </Helmet>
  )
}
