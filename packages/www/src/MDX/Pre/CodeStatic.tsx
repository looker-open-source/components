import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import styled from 'styled-components'
import React from 'react'
import prismTheme from './prism-theme'

interface CodeStaticProps {
  code: string
  language: Language
  className?: string
}

const CodeStatic: React.FC<CodeStaticProps> = ({
  code,
  language,
  ...props
}) => {
  const outerClassName = props.className

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreWrapper className={`${className} ${outerClassName}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </PreWrapper>
      )}
    </Highlight>
  )
}

export default CodeStatic

const PreWrapper = styled.pre`
  ${({ theme: { lineHeights, radii, space } }) => `
    border-radius: ${radii.medium}
    padding: ${space.medium};
    line-height: ${lineHeights.medium};
    margin: ${lineHeights.medium} 0;
  `};
`
