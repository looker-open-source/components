import { Paragraph, List, ListItem } from '@looker/components'
import * as headings from './Headings'
import { Code } from './Code'
import { Layout } from './Layout/Layout'
import { Playground } from './Playground'
import { Pre } from './Pre'
import { Props } from './Props'

export default {
  ...headings,
  p: Paragraph,
  code: Code,
  playground: Playground,
  pre: Pre,
  layout: Layout,
  props: Props,
  ul: List,
  li: ListItem,
}
