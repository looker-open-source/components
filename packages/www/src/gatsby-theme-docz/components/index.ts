import * as headings from './Headings'
import Code from './Code'
import Layout from './Layout/Layout'
import Playground from './Playground'
import Pre from './Pre'
import Props from './Props'
import Paragraph from './Paragraph'
import Ul from './Ul'
import Ol from './Ol'
import Li from './Li'
import Blockquote from './Blockquote'
import Link from './Link'

export default {
  ...headings,
  a: Link,
  p: Paragraph,
  inlineCode: Code,
  playground: Playground,
  pre: Pre,
  layout: Layout,
  props: Props,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
}
