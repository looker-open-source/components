import * as headings from './Headings'
import Code from './Code'
import Layout from './Layout'
import DefaultPlaygroundWrapper from './DefaultPlaygroundWrapper'
import Pre from './Pre'
import Paragraph from './Paragraph'
import Ul from './Ul'
import Ol from './Ol'
import Li from './Li'
import Blockquote from './Blockquote'
import Link from './Link'
import Img from './Img'

export default {
  ...headings,
  a: Link,
  blockquote: Blockquote,
  img: Img,
  inlineCode: Code,
  layout: Layout,
  li: Li,
  ol: Ol,
  p: Paragraph,
  Playground: DefaultPlaygroundWrapper,
  pre: Pre,
  ul: Ul,
}
