import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React from 'react'
import { PreWrapper } from './Pre.styles'

interface CodeProps {
  children: React.ReactNode
  className?: string
}

const Pre: React.FC<CodeProps> = ({
  children = () => {},
  className: outerClassName,
}) => {
  const [language] = outerClassName
    ? outerClassName.replace(/language-/, '').split(' ')
    : ['jsx']

  const childContent = React.Children.map(children, child => {
    return (child as any).props.children
  }).join('')

  return (
    <Highlight
      {...defaultProps}
      code={childContent}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreWrapper
          className={`${outerClassName || ''} ${className}`}
          style={style}
        >
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

export default Pre
