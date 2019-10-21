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
const githubBase = 'https://github.com/looker/lens/blob/master/src/components/'
const githubComponentExtension = '.tsx'

const ComponentResources: FC<ComponentResourcesProps> = ({
  figma,
  github,
  feedbackTitle,
}) => {
  return (
    <List>
      {github && (
        <Resource url={`${githubBase}${github}${githubComponentExtension}`}>
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
          url={`https://github.com/looker/lens/issues/new?title=${feedbackTitle}+Component+Feedback`}
        >
          <FeedbackSvg /> Feedback
        </Resource>
      )}
    </List>
  )
}

export default ComponentResources

/* border-top: solid 1px ${props => props.theme.colors.palette.charcoal200};
  border-bottom: solid 1px ${props => props.theme.colors.palette.charcoal200};
  display: flex;
  padding: ${props => props.theme.space.medium};
  ${props => props.theme.space.small};
  justify-content: space-between;
  align-items: center;
 */
