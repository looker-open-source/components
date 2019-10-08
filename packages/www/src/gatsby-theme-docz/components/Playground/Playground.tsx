import React, { useState } from 'react'
import { LiveProvider, LiveError, LivePreview, LiveEditor } from 'react-live'
// import { Resizable } from 're-resizable'
// import { copy } from 'copy-text-to-clipboard'
import { PlaygroundProps } from 'docz'
import { LivePreviewWrapper } from './LivePreviewWrapper'

const Playground: React.FC<PlaygroundProps> = ({
  code,
  // language,
  scope,
  // showLivePreview = true,
  // showLiveError = true,
  // showPlaygroundEditor = true,
}) => {
  const [showingCode, setShowingCode] = useState(true)
  const [showLivePreview] = useState(true)
  const [showLiveError] = useState(true)
  // const [width, setWidth] = useState(() => '100%')

  const transformCode = (code: string) => {
    if (code.startsWith('()') || code.startsWith('class')) return code
    return `<React.Fragment>${code}</React.Fragment>`
  }

  const toggleCode = () => {
    setShowingCode(s => !s)
  }

  // const resizableProps = {
  //   minWidth: 260,
  //   maxWidth: '100%',
  //   size: {
  //     width,
  //   },
  //   style: {
  //     margin: '0 auto ',
  //   },
  //   enable: {
  //     top: false,
  //     right: true,
  //     bottom: false,
  //     left: false,
  //     topRight: false,
  //     bottomRight: false,
  //     bottomLeft: false,
  //     topLeft: false,
  //   },
  //   onResizeStop: (e, direction, ref) => {
  //     setWidth(ref.style.width)
  //   },
  // }

  return (
    // <Resizable {...resizableProps}>
    <LiveProvider
      code={code}
      scope={scope}
      transformCode={transformCode}
      // language={language}
    >
      <div>
        <LivePreviewWrapper showingCode={showingCode}>
          {showLivePreview && <LivePreview />}
        </LivePreviewWrapper>
        <div>
          {/* <button onClick={() => copy(code)}>Copy</button> */}
          <button onClick={toggleCode}>Code</button>
        </div>
      </div>
      {showLiveError && <LiveError />}
      {showingCode && (
        <div>
          <LiveEditor />
        </div>
      )}
    </LiveProvider>
    // </Resizable>
  )
}

export default Playground
