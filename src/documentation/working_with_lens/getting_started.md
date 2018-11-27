
Lens is currently published to Nexus, Looker's private package server. [First, ensure your project is setup to pull NPM packages from Nexus.](https://github.com/looker/helltool/blob/master/docs/dev/npm_nexus_packages.md#configuring-nexus-for-npm-package-consumption)

Next, add Lens to your project.

```bash noeditor
yarn add looker-lens styled-components
yarn add --dev @types/react @types/react-dom @types/styled-system
```

Import some components from Lens:

```jsx static
import { Card, CardContent, Heading, Text, ThemeProvider, theme } from 'looker-lens'

<ThemeProvider theme={theme}>
  <Card raised>
    <CardContent>
      <Heading weight="semiBold" transform="caps">Welcome to Lens</Heading>
      <Text>Looker's component library</Text>
    </CardContent>
  </Card>
</ThemeProvider>
```

Which renders the following:

```jsx
<Card raised>
  <CardContent>
    <Heading weight="semiBold" transform="caps">Welcome to Lens</Heading>
    <Text>Looker's component library</Text>
  </CardContent>
</Card>
```

Try editing the code above, you should see the changes appear live.

These live editing blocks are found throughout lens.looker.com, providing a space for rapid experimentation with components.

## What are components?

Components are reusable building blocks that make up an application's user interface. Typically they wrap a logical part of an interface, including its behavior (Javascript), styling (CSS) and markup (HTML). They expose a programmatic interface allowing them to be configured and reused.

Because components operate behind an interface, they are a useful tool for building *semantic abstractions*. The `<Card/>` component above is a great example of this kind of semantic abstraction - the developer doesn't have to be concerned with the actual implementation of the `Card`, they can simply comply to its interface without need to know about its inner workings.

## A practical example

The above example shows Lens components in isolation. In practice, Lens components will exist as part of a larger React app (Lens components are written using React). Here's a simple example of a React component you might write to use in Helltool, composed of Lens components:

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

### Extending Lens

#### Composition

Lens (and React) rely heavily on the concept of composition, where smaller components can be composed to create higher-order behavior. In the `SpaceCard` example above the Lens `Card`, `CardContent` and `Heading` are composed to define a what it means to display a Space object in Card format.

#### Extending behavior

In rare cases Lens may not support the exact presentation or behavior necessary. Through composition and styling, most components can be extended and customized. Here's an example of a new LoggerButton that logs every click:

```jsx static
import * as React from 'react'
import { Button as BaseButton, ButtonProps as BaseButtonProps} from './looker-lens'

const logHandler = (event: React.MouseEvent<HTMLElement>) => {
  logger(event.target.value);
};

export const LoggerButton: React.SFC<ButtonProps> = ({onClick, ...props}) => {
  let clickHandler = logHandler;
  if (onClick !== undefined) {
    clickHandler = (event: React.MouseEvent<HTMLElement>) => {
      logHandler(event);
      if (onClick) onClick(event);
    }
  }

  return <Button onClick={clickHandler} {...props}>{props.children}</Button>
}
```

#### Extending styling

Styling can also be extended, but care is needed to ensure you do not violate Looker's design principles.

```jsx static
import { Button, styled } from 'looker-lens'

const CircularButton = styled(Button)`
  border-radius: 4rem;
`

<CircularButton>+</CircularButton>
```

#### Theme

To help stay withing Looker's design principles, [Lens publishes a theme object](https://github.com/looker/lens/blob/master/src/theme/theme.ts), along with libraries, like Styled Components and styled-system, to easily access the theme object within components. For example, when styling components using Lens' `styled` function, the theme object becomes part of a component's props:

```jsx static
import { Button, styled } from 'looker-lens'

const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.semanticColors.danger.main};
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
  background-color: ${(props) => props.theme.colors.semanticColors.primary.lighter};
  font-size: ${(props) => props.theme.fontSizes[5]};
  padding: ${(props) => props.spacing.large};
`
```

Using the Theme ensures your styling stays within the Looker design guidelines and will align in all Looker apps.
