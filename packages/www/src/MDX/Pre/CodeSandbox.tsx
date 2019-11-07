/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { Icon, IconButton, IconNames, Tooltip } from '@looker/components'
import { PrismTheme, Language } from 'prism-react-renderer'
import React, { FC, ReactNode, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
  withLive,
} from 'react-live'
import styled from 'styled-components'
import prismTheme from './prism-theme'
import { allComponents } from './allComponents'

interface CodeSandboxProps {
  code: string
  language: Language
  editorVisible?: boolean
}

const transformCode = (code: string) => {
  if (code.startsWith(';')) {
    // Workaround for annoying issue where prettier likes to inject a leading semicolon
    return code.replace(/(^;)/g, '')
  } else if (code.startsWith('()') || code.startsWith('class')) {
    return code
  } else {
    return `<>${code}</>`
  }
}

const CodeSandbox = ({
  code,
  language,
  editorVisible = true,
}: CodeSandboxProps) => {
  const [showEditor, setShowEditor] = useState(editorVisible)
  const toggleEditorView = () => {
    setShowEditor(!showEditor)
  }

  return (
    <SandboxWrapper>
      <LiveProvider
        scope={allComponents}
        theme={prismTheme}
        code={code}
        language={language}
        transformCode={code => transformCode(code)}
      >
        <LivePreviewWrapper>
          <LiveConsumer>
            {(error?: string) => (
              <>
                {!!error || (
                  <PreviewWrapper>
                    <LivePreview />
                  </PreviewWrapper>
                )}
                {!!error && (
                  <ErrorWrapper>
                    <div>
                      <IconWrapper>
                        <Icon name="Warning" size={24} />
                      </IconWrapper>
                    </div>
                    <LiveError />
                  </ErrorWrapper>
                )}
              </>
            )}
          </LiveConsumer>
        </LivePreviewWrapper>
        <EditorWrapper>
          {showEditor && <LiveEditor />}
          <ActionLayout editorIsVisible={showEditor}>
            <ToggleCodeButton
              onClick={toggleEditorView}
              editorIsVisible={showEditor}
            />
            {showEditor && (
              <CopyButton code={code} editorIsVisible={showEditor} />
            )}
          </ActionLayout>
        </EditorWrapper>
      </LiveProvider>
    </SandboxWrapper>
  )
}

// CodeSandbox.defaultProps = { live: true, language: 'jsx' }

export default CodeSandbox

interface LiveProps {
  code: string
  disabled: boolean
  error?: string
  language: string
  theme: PrismTheme
  onChange: () => void
  onError: () => void
}

interface WithLiveProps {
  children: (error?: string) => ReactNode
  live?: LiveProps
}

const LivePreviewWrapper = styled.div`
  position: relative;
`

export const LiveConsumer = withLive<WithLiveProps>(({ children, live }) => {
  return <>{children((live as LiveProps).error)}</>
})

interface ActionProps {
  editorIsVisible: boolean
}

interface CopyButtonProps extends ActionProps {
  code: string
}

export const CopyButton: FC<CopyButtonProps> = ({ code, editorIsVisible }) => {
  return (
    <Tooltip content="Copy sample code" placement="left">
      {(eventHandlers, ref) => (
        <CopyToClipboard
          text={code}
          onCopy={() => alert(`Sample code copied to clipboard.`)}
        >
          <ActionButton
            ref={ref}
            {...eventHandlers}
            label="Copy"
            icon="Clipboard"
            size="xsmall"
            editorIsVisible={editorIsVisible}
            mt="small"
          />
        </CopyToClipboard>
      )}
    </Tooltip>
  )
}

interface ToggleButtonProps extends ActionProps {
  onClick: () => void
}

export const ToggleCodeButton: FC<ToggleButtonProps> = ({
  editorIsVisible,
  onClick,
}) => {
  const toggleIcon: IconNames = editorIsVisible ? 'CaretUp' : 'CaretDown'
  const toggleLabel = editorIsVisible ? 'Hide code editor' : 'Show code editor'
  return (
    <Tooltip content={toggleLabel} placement="left">
      {(eventHandlers, ref) => (
        <ActionButton
          ref={ref}
          {...eventHandlers}
          editorIsVisible={editorIsVisible}
          onClick={onClick}
          label={toggleLabel}
          icon={toggleIcon}
          size="xsmall"
        />
      )}
    </Tooltip>
  )
}

const ActionButton = styled(IconButton)<ActionProps>`
  color: ${({ theme, editorIsVisible }) =>
    editorIsVisible
      ? theme.colors.palette.charcoal200
      : theme.colors.palette.charcoal500};
`

const ActionLayout = styled.div<ActionProps>`
  transition: background 0.35s;
  width: auto;
  display: grid;
  grid-template-rows: auto auto 1fr;
  justify-content: right;
  padding: ${({ theme }) => `${theme.space.xsmall}`};
  background: ${({ theme, editorIsVisible }) =>
    editorIsVisible
      ? theme.colors.palette.charcoal700
      : theme.colors.palette.charcoal200};
`

const SandboxWrapper = styled.div`
  overflow: hidden;
  ${({ theme: { lineHeights, colors, radii } }) => `
    line-height: ${lineHeights.medium};
    margin-bottom: ${lineHeights.medium};
    background: ${colors.palette.charcoal100};
    border-radius: ${radii.medium};
    color: ${colors.white};
  `}
`

const PreviewWrapper = styled.div`
  ${({ theme: { space } }) => `
    padding: ${space.small};
  `}
`

const EditorWrapper = styled.div`
  background: ${({ theme }) => theme.colors.palette.charcoal700};
  display: grid;
  grid-template-columns: 1fr auto;
  textarea,
  pre {
    ${({ theme: { space } }) => `
      padding: ${space.small} !important;
    `}
  }
`

const ErrorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  ${({ theme: { colors, space } }) => `
    grid-column-gap: ${space.small};
    color: ${colors.palette.red600};
    padding: ${space.small};
    background: ${colors.palette.red100};
  `}
  pre {
    margin: 0;
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  ${({ theme: { colors } }) => `
    background: ${colors.palette.red500};
    color: ${colors.palette.white};
  `}
  svg {
    transform: translateY(-2px);
  }
`
