/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import React from 'react'
import type { FC, SetStateAction, Dispatch } from 'react'
import type { CAll } from '@looker/visualizations'
import {
  useVisConfig,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data'
import { CopyToClipboard, Space, IconButton } from '@looker/components'
import styled from 'styled-components'
import { sortObjectByKeys } from '../utils'
import { Code } from '@styled-icons/material/Code'

type CodeToggleProps = {
  config: Partial<CAll>
  codeToggled?: boolean
  setCodeToggled: Dispatch<SetStateAction<boolean>>
} & (
  | {
      dashboard?: never
      query?: string | number
    }
  | {
      dashboard?: number
      query?: never
    }
)

export const CodeToggle: FC<CodeToggleProps> = ({
  config: configOverrides,
  query,
  dashboard,
  codeToggled,
  setCodeToggled,
}) => {
  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard)
  const { queryId } = useQueryId(query || dashboardQueryId)
  const { visConfig } = useVisConfig(queryId, configOverrides)
  const visConfigSorted = sortObjectByKeys(visConfig)
  const visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2)

  return (
    <Space reverse>
      <IconButton
        icon={<Code />}
        label="Show code"
        size="large"
        toggle={codeToggled}
        toggleBackground
        onClick={() => setCodeToggled(!codeToggled)}
      />
      {codeToggled ? (
        <StyledCopyToClipboard
          content={visConfigToDisplay}
          success="Copied to clipboard!"
        />
      ) : (
        ''
      )}
    </Space>
  )
}

const StyledCopyToClipboard = styled(CopyToClipboard)`
  display: inline;
`
