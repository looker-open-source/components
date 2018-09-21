<br/>

Add Lens to your project.

```bash noeditor
yarn add looker-lens
```

Import some components from Lens.

```js static
import { Card, CardContent, Heading, Text } from 'looker-lens'
```

```jsx
<Card raised>
  <CardContent>
    <Heading weight="semiBold" transform="caps">Welcome to Lens</Heading>
    <Text>Looker's component library</Text>
  </CardContent>
</Card>
```

Try editing the code above, changes should appear live.

```jsx noeditor
<Heading level="2" size="d3" transform="caps">What are components?</Heading>
```

Components are reusable building blocks of an application's user interface. Typically they wrap a logical part of a user interface, including its behavior (Javascript), styling (CSS) and markup (HTML). They also expose a programmatic interface allowing them to be configured and reused.

Because they operate behind an interface, they are a useful tool for building *semantic abstractions*. The `<Card/>` component above is a great example of this kind of semantic abstraction - the developer doesn't have to be concerned with the actual implementation of the `Card`, they can simply comply to its interface without need to know about its inner workings.

```jsx noeditor
<Heading level="2" size="d3" transform="caps">A practical example</Heading>
```

The above example shows Lens components in isolation. In practice, Lens components will exist as part of a larger React app (Lens components are written using React). Here's a simple example of a React component composed of Lens components:

```jsx static
import * as React from 'react'
import { Space } from 'looker-core'

interface SpaceCardProps {
  space: SpaceBase
}

export const SpaceCard = (props: SpaceCardProps) => {
  return (
    <Card>
      <CardContent>
        <Heading truncate>{props.space.name}</Heading>
      </CardContent>
    </Card>
  )
}
```

This defines a simple function which returns a set of composed Lens components, providing a semantic definition for a SpaceCard. Now, given a `Space` object, we can render it as a card in a consistent way like so:

```jsx static
<SpaceCard space={space} />
```

```jsx noeditor
<Heading level="2" size="d3" transform="caps">Extending Lens</Heading>
```

```jsx noeditor
<Heading level="3" size="1" transform="caps">Composition</Heading>
```

Lens (and React) rely heavily on the concept of composition, where smaller components can be composed to create larger, higher-order behavior. In the `SpaceCard` example above the Lens `Card`, `CardContent` and `Heading` are composed to define a what it means to display a Space object in Card format.

```jsx noeditor
<Heading level="3" size="1" transform="caps">Extending behavior</Heading>
```

In rare cases Lens may not support the exact presentation or behavior necessary. Through composition and styling, most components can be extended and customized. Here's an example of a new LoggerButton that logs every click:

```jsx static
import * as React from 'react'
import { Button as BaseButton, ButtonProps as BaseButtonProps} from './looker-lens'

const logHandler = (event: any) => {
  logger(event.target.value);
};

export const LoggerButton: React.SFC<ButtonProps> = ({onClick, ...props}) => {
  let clickHandler = logHandler;
  if (onClick !== undefined) {
    clickHandler = (event: any) => {
      logHandler(event);
      if (onClick) onClick(event);
    }
  }

  return <Button onClick={clickHandler} {...props}>{props.children}</Button>
}
```

```jsx noeditor
<Heading level="3" size="1" transform="caps">Extending styling</Heading>
```

Styling can also be extended, but care is needed to ensure you do not violate Looker's design principles:

```jsx static
import { Button } from 'looker-lens'

const CircularButton = styled(Button)`
  border-radius: 4rem;
`

<CircularButton>+</CircularButton>
```

```jsx noeditor
<Heading level="2" size="d3" transform="caps">Theme</Heading>
```

To help stay withing Looker's design principles, [Lens publishes a Theme object](https://github.com/looker/lens/blob/master/src/theme/index.ts). When building components using Lens' styled function, this Theme object becomes part of a component's props. That means it's available when components are `extended` or when the `styled` function is used for new components:

```jsx static
const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.semanticColors.danger.main};
`
```

```jsx static
interface PersonTitleProps {
  person: Person
}

const BasePersonTitle = ({ props: PersonTitleProps }) => {
  return (
    <tag.h2>{props.person.name} - {props.person.title}</tag.h2>
  )
}

const PersonTitle = styled<PersonTitleProps>(BasePersonTitle)`
  background-color: ${(props) => props.theme.semanticColors.primary.lighter};
  font-size: ${(props) => props.theme.fontSizes[5]};
  padding: ${(props) => props.spacing.large};
`
```

Using the Theme ensures your styling stays within the Looker design guidelines and will align in all Looker apps.
