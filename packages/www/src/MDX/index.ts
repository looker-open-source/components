import * as headings from './Headings'
import Blockquote from './Blockquote'
import Code from './Code'
import Hr from './Hr'
import Img from './Img'
import Li from './Li'
import Link from './Link'
import Ol from './Ol'
import Paragraph from './Paragraph'
import Pre from './Pre'
import Ul from './Ul'

const MDXComponents = {
  ...headings,
  a: Link,
  blockquote: Blockquote,
  hr: Hr,
  img: Img,
  inlineCode: Code,
  li: Li,
  ol: Ol,
  p: Paragraph,
  pre: Pre,
  ul: Ul,
}

export default MDXComponents
