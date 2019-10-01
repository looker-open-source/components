import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
  StatusAndResources,
  StatusLabels,
} from '../StatusAndResources/StatusAndResources'

export interface ComponentDetailProps {
  of: string
  status?: StatusLabels
  feedbackTitle?: string
  figma?: string
  github?: string
  interfaceName?: string
}

export const ComponentDetail = ({
  of,
  github = `${of}/${of}`,
  status = 'stable',
  interfaceName = `${of}Props`,
  figma,
  feedbackTitle = `${of} Component Feedback`,
}: ComponentDetailProps) => {
  const figmaBase = 'https://www.figma.com'
  const githubBase = 'https://github.com/looker/lens/blob/master/src/components'
  const githubComponentExtension = '.tsx'

  return (
    <Fragment>
      <StatusAndResources
        status={status}
        githubURL={`${githubBase}/${github}${githubComponentExtension}`}
        figmaURL={`${figmaBase}/${figma}`}
        feedbackTitle={feedbackTitle}
      />
      <PropContainer>{interfaceName}</PropContainer>
    </Fragment>
  )
}

const PropContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  background: #ffc;

  &::before {
    content: '🚧';
    font-size: 1.25rem;
    margin-right: 1rem;
  }
`

export default ComponentDetail
