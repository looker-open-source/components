import * as headings from './Headings'
import Code from './Code'
import Layout from './Layout'
import CodeSandbox from './CodeSandbox'
import Pre from './Pre'
import Paragraph from './Paragraph'
import Ul from './Ul'
import Ol from './Ol'
import Li from './Li'
import Blockquote from './Blockquote'
import Link from './Link'
import Img from './Img'
import Hr from './Hr'

export default {
  ...headings,
  a: Link,
  blockquote: Blockquote,
  hr: Hr,
  img: Img,
  inlineCode: Code,
  layout: Layout,
  li: Li,
  ol: Ol,
  p: Paragraph,
  Playground: CodeSandbox,
  pre: Pre,
  ul: Ul,
}
