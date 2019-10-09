import * as headings from './Headings'
import Code from './Code'
import Layout from './Layout'
import Pre from './Pre'
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
  pre: Pre,
  layout: Layout,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
}
