import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '@looker/components'
import { FeedbackSvg, FigmaSvg, GithubSvg } from './ResourceIcons'

export type StatusLabels = 'experimental' | 'deprecated' | 'stable'
export interface StatusProps {
  status: StatusLabels
}

const StatusIndicator = ({ status, ...args }: StatusProps) => {
  return (
    <a className="support-link" href="/#!/Support%20Levels">
      <Text fontSize="small" {...args}>
        {status}
      </Text>
    </a>
  )
}

function getCorrectStatusColor(status: StatusLabels) {
  switch (status) {
    case 'experimental':
      return css`
        background-color: ${props => props.theme.colors.palette.yellow000};
        border-left: solid 4px ${props => props.theme.colors.palette.yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
    case 'deprecated':
      return css`
        background-color: ${props => props.theme.colors.palette.red100};
        border-left: solid 5px ${props => props.theme.colors.palette.red500};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '🚫';
          /* stylelint-enable */
        }
      `
    case 'stable':
      return css`
        &:hover {
          color: ${props => props.theme.colors.palette.blue600};
        }
        &::before {
          /* stylelint-disable */
          content: '✅';
          /* stylelint-enable */
        }
      `
    default:
      return css`
        background-color: ${props => props.theme.colors.palette.yellow000};
        border-left: solid 4px ${props => props.theme.colors.palette.yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
  }
}

export const StatusDiv = styled(StatusIndicator)`
  display: flex;
  text-transform: capitalize;
  padding: ${props => props.theme.space.small};
  border-radius: 2px;
  margin-right: ${props => props.theme.space.medium};

  &::before {
    /* stylelint-disable */
    content: '';
    /* stylelint-enable */
    font-size: 16px;
    margin-right: ${props => props.theme.space.xsmall};
    transition: ${props =>
      `transform ${props.theme.transitions.durationSimple} ${props.theme.easings.easeOut}`};
  }

  &:hover {
    color: ${props => props.theme.colors.palette.blue600};

    &::before {
      transform: scale(1.12);
    }
  }

  ${(props: StatusProps) => getCorrectStatusColor(props.status)};
`

export interface ResourceProps {
  url: string
}

const ResourceIconRender: FC<ResourceProps> = ({ url, ...args }) => {
  if (!url) {
    return null
  } else {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...args}>
        {args.children}
      </a>
    )
  }
}

const ResourceIcon = styled(ResourceIconRender)`
  margin-right: ${props => props.theme.space.medium};
  svg {
    transition: ${props =>
      `transform ${props.theme.transitions.durationModerate} ${props.theme.easings.easeOut}`};
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

interface StatusAndResourcesProps {
  status: StatusLabels
  figmaURL: string
  githubURL: string
  feedbackTitle: string
}

const StatusAndResourcesRenderer = ({
  status,
  figmaURL,
  githubURL,
  feedbackTitle,
  ...args
}: StatusAndResourcesProps) => {
  return (
    <div {...args}>
      <StatusDiv status={status} />
      <div>
        <ResourceIcon url={figmaURL}>
          <FigmaSvg />
        </ResourceIcon>
        <ResourceIcon url={githubURL}>
          <GithubSvg />
        </ResourceIcon>
        <ResourceIcon
          url={`https://github.com/looker/lens/issues/new?title=${feedbackTitle}`}
        >
          <FeedbackSvg />
        </ResourceIcon>
      </div>
    </div>
  )
}

const StatusAndResources = styled(StatusAndResourcesRenderer)`
  border-top: solid 1px ${props => props.theme.colors.palette.charcoal200};
  border-bottom: solid 1px ${props => props.theme.colors.palette.charcoal200};
  display: flex;
  padding: ${props => props.theme.space.medium};
  ${props => props.theme.space.small};
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    flex-grow: 1;
  }
`

export default StatusAndResources
