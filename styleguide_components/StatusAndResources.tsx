import * as React from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../src/components/Text/Text'
import { green500, red500, yellow500 } from '../src/styles/colors'
import { RampSizes } from '../src/styles/ramp_sizes'
import { themeColors } from '../src/themes/theme_colors'
import { themeEasings } from '../src/themes/theme_easings'
import { themeSpacing } from '../src/themes/theme_spacing'
import { themeTransitions } from '../src/themes/theme_transitions'
import {
  FeedbackSvg,
  FigmaSvg,
  GithubSvg
} from '../styleguide_components/ResourceIcons'

export enum StatusLabels {
  Experimental = 'experimental',
  Deprecated = 'deprecated',
  Stable = 'stable'
}
export interface StatusProps {
  status: StatusLabels
}

const statusIndicator: React.SFC<StatusProps> = ({ status, ...args }) => {
  return (
    <Text size={RampSizes.Five} {...args}>
      {status}
    </Text>
  )
}

function getCorrectStatusColor(status: StatusLabels) {
  switch (status) {
    case StatusLabels.Experimental:
      return css`
        &:before {
          background-color: ${yellow500};
        }
      `
    case StatusLabels.Deprecated:
      return css`
        background-color: ${red500};
        border-color: ${red500};
        color: #fff;
        font-weight: 600;
        flex-grow: 1;

        &:before {
          background-color: #fff;
        }
      `
    case StatusLabels.Stable:
      return css`
        &:before {
          background-color: ${green500};
        }
      `
    default:
      return css`
        &:before {
          background-color: ${yellow500};
        }
      `
  }
}

export const StatusDiv = styled<StatusProps>(statusIndicator)`
  position: relative;
  text-transform: capitalize;
  border: solid 1px ${themeColors.borderColorLight};
  padding: 4px 8px;
  border-radius: 4px;

  &:before {
    /* stylelint-disable */
    content: '';
    /* stylelint-enable */
    display: inline-flex;
    width: ${themeSpacing.s};
    height: ${themeSpacing.s};
    border-radius: 50%;
    margin-right: ${themeSpacing.s};
  }

  ${props => getCorrectStatusColor(props.status)};
`

export interface ResourceProps {
  url: string
}

const ResourceIconRender: React.SFC<ResourceProps> = ({ url, ...args }) => {
  return (
    <a href={url} target="_blank" {...args}>
      {args.children}
    </a>
  )
}

const ResourceIcon = styled<ResourceProps>(ResourceIconRender)`
  margin-left: 16px;
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
  figma: string
  github: string
  feedback: string
}

const StatusAndResourcesRenderer: React.SFC<StatusAndResourcesProps> = ({
  status,
  figma,
  github,
  feedback,
  ...args
}) => {
  return (
    <div {...args}>
      <StatusDiv status={status} />
      <div>
        <ResourceIcon url={figma}>
          <FigmaSvg />
        </ResourceIcon>
        <ResourceIcon url={github}>
          <GithubSvg />
        </ResourceIcon>
        <ResourceIcon
          url={`https://github.com/looker/relens/issues/new?title=${feedback}`}
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
  border-top: solid 1px ${themeColors.borderColorLight};
  border-bottom: solid 1px ${themeColors.borderColorLight};
  display: flex;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;
`
