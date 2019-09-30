[Styled Components](https://www.styled-components.com/) is a low level CSS
library used by Lens.

> 👋 Heads up! 👋
>
> **You should rarely need to use Styled Components.** Instead use the [`<Box/>`](/#/Components/Layout?id=box)
> component and its props which ensures you use Lens' theme values and
> stay within the Lens style guidelines. Styled Components should only be
> used for configuring [pseudo classes (eg `:hover`)](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), [pseudo elements (eg
> `:before`)](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements), animations, or rarely when `<Box/>`'s properties are insufficient.

### Things You'll Learn

- Use Styled Components' `styled` function for styling pseudo classes and pseudo
  elements.
- Strip props out before passing them to lower level components to avoid runtime
  errors.
- Styled Components provides access to a component's prop values so styling can
  be computed dynamically.

## Styling a Lens Component

Let's pretend we want to build a new kind of `<Link>` that renders visited links
a bit differently. Our designer has laid out the following specs:

1.  Visited links should render red.
2.  The component should accept a prop called `visited` that renders the text as
    strike-through on hover.

To handle this, we'll use Styled Components' `styled` function because we'll
need to style both the `:visited` and `:hover` pseudo classes. Step one is to
set the `:visited` color to our palette.red400 color. We can access the Theme
via Styled Components, so this is easy enough:

```js
import styled from 'styled-components'
import { Link } from '../../components/Link'

const VisitedLink = styled(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }
`
;<VisitedLink href="https://www.google.com">Hello</VisitedLink>
```

Note, `styled` expects to be passed a React component directly. In the example
above, we pass it the `Link` Lens component.

Now let's handle the `visited` prop. Things become a bit more complex because we
need to add a new prop to our Link. In Typescript you might expect to do
something like this, but it will cause a run time error like `Warning: Received 'true' for a non-boolean attribute 'visited'`:

```ts noeditor
import { Link } from '../../components/Link'

interface VisitedLink extends Link {
  visited?: boolean
}

const VisitedLink = styled(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }

  :hover {
    text-decoration: ${props => (props.visited ? 'line-through' : 'underline')};
  }
`
;<VisitedLink href="https://www.google.com">Hello</VisitedLink>
```

This happens because when Styled Components wraps a component, it passes all
props passed to it straight through to the wrapped component (`<Link>` in this
case). While this may seem confusing or inconvenient, [this behavior is by
design](https://www.styled-components.com/docs/basics#passed-props).

To eliminate the runtime warning, we need to intercept the prop and prevent it
from being passed to `<Link/>`. It requires a bit of ceremony, but is easy
enough with [ES6's spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
import styled from 'styled-components'
import { Link } from '../../components/Link'

const VisitedLinkFactory = ({ visited, ...props }) => <Link {...props} />

const VisitedLink = styled(VisitedLinkFactory)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }

  :hover {
    text-decoration: ${props => (props.visited ? 'line-through' : 'underline')};
  }
`
;<VisitedLink visited href="https://www.google.com">
  Hello
</VisitedLink>
```

Et voilà. Note we created the internal `VisitedLinkFactory` function
which strips out the `visited` prop before it ever reaches the composed `Link`
component.

## Styling Child Components and Linter Errors

Styled Components [provides a useful mechanism for styling child components](https://www.styled-components.com/docs/advanced#referring-to-other-components). This syntax, unfortunately, [generates a known linter error](https://github.com/styled-components/stylelint-processor-styled-components/issues/34#issuecomment-325339118). To remove the linter error, simply add the `/* sc-selector */` tag to your style definition. For example:

```jsx static
import { styled, Link } from 'looker-lens'

const Card = styled.div`
  ${/* sc-selector */ Link} {
    background-color: ${props => props.theme.palette.green300};
  }
`
```
