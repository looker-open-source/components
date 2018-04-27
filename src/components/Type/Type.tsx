import * as React from 'react'

export interface TypeProps {
  mode?: 'h1' | 'h2' | 'h3' | 'h5' | 'h6' | 'p' | undefined,
  align?: 'left' | 'right' | 'center'
}

export const Type: React.SFC<TypeProps> = ({mode,...args}) => {
  const Tag = mode? `${mode}` : 'p'
  return (
    <Tag>
      {args.children}
    </Tag>
  )
}

