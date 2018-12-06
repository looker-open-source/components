import * as React from 'react'
import { Text } from '../src/components/Text/Text'
import { css, easings, palette, styled, transitions } from '../src/style'
import {
  FeedbackSvg,
  FigmaSvg,
  GithubSvg,
} from '../styleguide_components/ResourceIcons'

const { blue600, charcoal200, red100, red500, yellow000, yellow400 } = palette

export type StatusLabels = 'experimental' | 'deprecated' | 'stable'
export interface StatusProps {
  status: StatusLabels
}

const statusIndicator: React.SFC<StatusProps> = ({ status, ...args }) => {
  return (
    <a className="support-link" href="/#!/Support%20Levels">
      <Text size="small" {...args}>
        {status}
      </Text>
    </a>
  )
}

function getCorrectStatusColor(status: StatusLabels) {
  switch (status) {
    case 'experimental':
      return css`
        background-color: ${yellow000};
        border-left: solid 4px ${yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
    case 'deprecated':
      return css`
        background-color: ${red100};
        border-left: solid 5px ${red500};
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
          color: ${blue600};
        }
        &::before {
          /* stylelint-disable */
          content: '✅';
          /* stylelint-enable */
        }
      `
    default:
      return css`
        background-color: ${yellow000};
        border-left: solid 4px ${yellow400};
        flex-grow: 1;

        &::before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
  }
}

export const StatusDiv = styled<StatusProps>(statusIndicator)`
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
    transition: transform ${transitions.durationSimple} ${easings.easeOut};
  }

  &:hover {
    color: ${blue600};

    &::before {
      transform: scale(1.12);
    }
  }

  ${props => getCorrectStatusColor(props.status)};
`

export interface ResourceProps {
  url: string
}

const ResourceIconRender: React.SFC<ResourceProps> = ({ url, ...args }) => {
  if (!url) {
    return null
  } else {
    return (
      <a href={url} target="_blank" {...args}>
        {args.children}
      </a>
    )
  }
}

const ResourceIcon = styled<ResourceProps>(ResourceIconRender)`
  margin-right: ${props => props.theme.space.medium};
  svg {
    transition: transform ${transitions.durationModerate} ${easings.easeOut};
  }

  &:hover svg {
    transform: scale(1.2);
  }
`

export interface StatusAndResourcesProps {
  status: StatusLabels
  figmaURL: string
  githubURL: string
  feedbackTitle: string
}

const StatusAndResourcesRenderer: React.SFC<StatusAndResourcesProps> = ({
  status,
  figmaURL,
  githubURL,
  feedbackTitle,
  ...args
}) => {
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

export const StatusAndResources = styled<StatusAndResourcesProps>(
  StatusAndResourcesRenderer
)`
  border-top: solid 1px ${charcoal200};
  border-bottom: solid 1px ${charcoal200};
  display: flex;
  padding: ${props => props.theme.space.medium}
    ${props => props.theme.space.small};
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    flex-grow: 1;
  }
`
