import { List, ListItem } from '@looker/components'
import * as headings from './Headings'
import Code from './Code'
import { Layout } from './Layout/Layout'
import { Playground } from './Playground'
import Pre from './Pre'
import { Props } from './Props'
import Paragraph from './Paragraph'
import Ul from './Ul'

export default {
  ...headings,
  p: Paragraph,
  inlineCode: Code,
  playground: Playground,
  pre: Pre,
  layout: Layout,
  props: Props,
  ul: Ul,
  ol: List,
  li: ListItem,
}
