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

import React, { FC } from 'react'
import { List } from '@looker/components'
import { FeedbackSvg, FigmaSvg, GithubSvg } from './ResourceIcons'
import Resource from './Resource'

interface ComponentResourcesProps {
  figma?: string
  github?: string
  feedbackTitle?: string
}

const figmaBase = 'https://www.figma.com/'
const githubBase =
  'https://github.com/looker-open-source/components/blob/master/packages/components/src/'

const ComponentResources: FC<ComponentResourcesProps> = ({
  figma,
  github,
  feedbackTitle,
}) => {
  return (
    <List>
      {github && (
        <Resource url={`${githubBase}${github}`}>
          <GithubSvg /> Source
        </Resource>
      )}
      {figma && (
        <Resource url={`${figmaBase}${figma}`}>
          <FigmaSvg /> Assets
        </Resource>
      )}
      {feedbackTitle && (
        <Resource
          url={`https://github.com/looker-open-source/components/issues/new?title=${feedbackTitle}+Component+Feedback`}
        >
          <FeedbackSvg /> Feedback
        </Resource>
      )}
    </List>
  )
}

export default ComponentResources
