import * as React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../src/components/Text/Text'
import {
  blue600,
  charcoal200,
  red100,
  red500,
  yellow000,
  yellow400,
} from '../src/styles/colors'
import { RampSizes } from '../src/styles/ramp_sizes'
import { themeEasings } from '../src/themes/theme_easings'
import { themeSpacing } from '../src/themes/theme_spacing'
import { themeTransitions } from '../src/themes/theme_transitions'
import {
  FeedbackSvg,
  FigmaSvg,
  GithubSvg,
} from '../styleguide_components/ResourceIcons'

export enum StatusLabels {
  Experimental = 'experimental',
  Deprecated = 'deprecated',
  Stable = 'stable',
}
export interface StatusProps {
  status: StatusLabels
}

const statusIndicator: React.SFC<StatusProps> = ({ status, ...args }) => {
  return (
    <a href="/#!/Support%20Levels">
      <Text size={RampSizes.Five} {...args}>
        {status}
      </Text>
    </a>
  )
}

function getCorrectStatusColor(status: StatusLabels) {
  switch (status) {
    case StatusLabels.Experimental:
      return css`
        background-color: ${yellow000};
        border-left: solid 4px ${yellow400};
        flex-grow: 1;

        &:before {
          /* stylelint-disable */
          content: '⚠️';
          /* stylelint-enable */
        }
      `
    case StatusLabels.Deprecated:
      return css`
        background-color: ${red100};
        border-left: solid 5px ${red500};
        flex-grow: 1;

        &:before {
          /* stylelint-disable */
          content: '🚫';
          /* stylelint-enable */
        }
      `
    case StatusLabels.Stable:
      return css`
        &:hover {
          color: ${blue600};
        }
        &:before {
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

        &:before {
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
  padding: ${themeSpacing.s};
  border-radius: 2px;
  margin-right: ${themeSpacing.m};

  &:before {
    /* stylelint-disable */
    content: '';
    /* stylelint-enable */
    font-size: 16px;
    margin-right: ${themeSpacing.xs};
    transition: transform ${themeTransitions.durationSimple}
      ${themeEasings.easeOut};
  }

  &:hover {
    color: ${blue600};

    &:before {
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
  margin-right: ${themeSpacing.m};
  svg {
    transition: transform ${themeTransitions.durationModerate}
      ${themeEasings.easeOut};
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
          url={`https://github.com/looker/relens/issues/new?title=${feedbackTitle}`}
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
  padding: ${themeSpacing.m} ${themeSpacing.s};
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    flex-grow: 1;
  }
`
