import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

interface CodeProps {
  children: string
  className?: string
}

export const Code: React.FC<CodeProps> = ({
  children,
  className: outerClassName,
}) => {
  const [language] = outerClassName
    ? outerClassName.replace(/language-/, '').split(' ')
    : ['text']

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${outerClassName || ''} ${className}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
