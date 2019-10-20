import { Language } from 'prism-react-renderer'
import React from 'react'

import CodeSandbox from './CodeSandbox'
import CodeStatic from './CodeStatic'

interface PreProps {
  children: {
    props: {
      children: string
      parentName?: string
      mdxType?: string
      className?: string
      originalType?: string
      static?: boolean
    }
  }
}

const Pre = ({ children }: PreProps) => {
  const { className } = children.props
  const trimmedClassName = className
    ? className.replace(/language-/, '')
    : 'jsx'
  const language = trimmedClassName as Language

  const code = children.props.children.trim()

  if (children.props.static) {
    return <CodeStatic code={code} className={className} language={language} />
  } else {
    return <CodeSandbox code={code} language={language} />
  }
}

export default Pre
