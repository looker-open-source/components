declare module '@mdx-js/react' {
  import React, { ComponentType, ReactNode } from 'react'
  type ComponentType =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'thematicBreak'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'li'
    | 'table'
    | 'tr'
    | 'td'
    | 'pre'
    | 'code'
    | 'em'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'hr'
    | 'a'
    | 'img'

  export type Components = {
    [key in ComponentType]?: ComponentType<any>
  }
  export interface MDXProviderProps {
    children?: ReactNode
    components: Components
  }
  export class MDXProvider extends Component<MDXProviderProps> {}
}
