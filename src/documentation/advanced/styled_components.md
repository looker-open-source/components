[Styled Components](https://www.styled-components.com/) is a low level styling
library used by Lens to style components.

> 👋 Heads up! 👋
>
> **You should rarely need to use Styled Components.** Instead use the [`<Box/>`](/#/Components/Layout?id=box)
> component and its props which ensures you use Lens' theme values and
> stay within the Lens style guidelines. Styled Components should only be
> used for configuring pseudo classes, pseudo elements, animations, or rarely
> when Box's properties are insufficient.

## Extending a Lens Component

In many cases you may need extend just the styling of Lens component to create a
new component.

Let's pretend we want to build a new kind of `<Link>` that renders visited links
a bit differently. Our designer has laid out the following specs:

  1. Visited links should render red.
  2. The component should accept a prop called `visited` that renders the text as
   strike-through on hover.

To handle this, we'll use Styled Components' `styled` function, which Lens
exports as a helpful utility. Step one is to set the `:visited` color to our
palette.red400 color. We can access the Theme via Styled Components, so this is
easy enough:

```js
const styled = require('../../style').styled;

const VisitedLink = styled(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }
`;

<VisitedLink href="https://www.google.com">Hello</VisitedLink>
```

Now let's handle the `visited` prop. Things become a bit more complex because we
need to add a new prop to our Link. In Typescript you might expect to do
something like this, but it will cause a run time error like `Warning: Received 'true' for a non-boolean attribute 'visited'`:

```ts noeditor

interface VisitedLink extends Link {
  visited?: boolean
}

const VisitedLink = styled<VisitedLink>(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }

  :hover {
    text-decoration: ${props => props.visited ? 'line-through' : 'underline'};
  }
`;

<VisitedLink href="https://www.google.com">Hello</VisitedLink>
```

This happens because when Styled Components wraps a component, it passes all
props passed to it straight through to the wrapped component (`<Link>` in this
case). While this may seem confusing or inconvenient, [this behavior is by
design](https://www.styled-components.com/docs/basics#passed-props).

To eliminate the runtime warning, we need to intercept the prop and prevent it
from being passed to `<Link/>`. It requires a bit of ceremony, but is easy
enough with [ES6's spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
const styled = require('../../style').styled;

const VisitedLinkFactory = ({visited, ...props}) => <Link {...props}/>

const VisitedLink = styled(VisitedLinkFactory)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }

  :hover {
    text-decoration: ${props => props.visited ? 'line-through' : 'underline'};
  }
`;

<VisitedLink visited href="https://www.google.com">Hello</VisitedLink>
```

Et voilà. Note we created the internal `VisitedLinkFactory` function
which strips out the `visited` prop before it ever reaches the composed `Link`
component.

### Takeaways

  * Use Styled Components' `styled` function for styling with pseudo classes and
   elements.
  * Strip props out before passing them to lower level components to avoid runtime
  errors.
  * Styled Components provides access to a component's prop values so styling can
  be computed dynamically.
