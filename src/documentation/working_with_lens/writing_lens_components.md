
Lens is built using the following language and libraries:

* [Typescript](typescriptlang.org)
* [React](https://reactjs.org/)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [StyledComponents](https://www.styled-components.com/)
* [styled-system](https://github.com/jxnblk/styled-system)

You **don't** have to be an expert in all of those technologies to start using Lens today, but it's good to have an understanding about why they were chosen and how they are employed inside Lens when writing new core Lens components.

The following technologies roughly form a "stack", in that each layer is used by the next to solve a more specific problem:

```jsx noeditor
<Heading level="3" size="1" transform="caps">Typescript</Heading>
```

Lens is written in Typescript, which provides the ability to define static types, and strictly define and enforce Lens component interfaces.

```jsx static
interface PersonProps {
  name: string
  age: number
}

const PersonDetail = (props: PersonProps) => ...
```

```jsx noeditor
<Heading level="3" size="1" transform="caps">React</Heading>
```

React is a Javascript library that makes it easy to build UI components.

```jsx static
interface PersonProps {
  name: string
  age: number
}

const PersonDetail = (props: PersonProps) => {
  return (
    <Box>
      <Heading>{props.name}</Heading>
      <Text>Age: {props.age}</Text>
    </Box>
  )
}
```

```jsx noeditor
<Heading level="3" size="1" transform="caps">JSX</Heading>
```

JSX is an abstract syntax whose expressions look roughly like an XML tag language. In the context of React, JSX is used to define the use and composition of React components.

Because it is an abstraction, JSX can be compiled to many different targets, including mobile OSes, and even other frontend libraries like Vue.

```jsx static
<Box>
  <Heading>{props.name}</Heading>
  <Text>Age: {props.age}</Text>
</Box>
```

```jsx noeditor
<Heading level="3" size="1" transform="caps">Styled Components</Heading>
```

Styled Components is a css-in-js library that allows developers to write styling in Typescript and couple it directly to a component. There are pros and cons to using CSS in this way. If you want to learn more about this approach [this talk is highly recommended](https://speakerdeck.com/vjeux/react-css-in-js).

Styled Components also provides a Theme object which allows entire applications to adhere to a consistent style guide

```jsx static
interface PersonProps {
  name: string
  age: number
}

const BasePersonDetail = (props: PersonProps) => {
  return (
    <Box>
      <Heading>{props.name}</Heading>
      <Text>Age: {props.age}</Text>
    </Box>
  )
}

const PersonDetail = styled<PersonProps>(BasePersonDetail)`
  border: 2px solid black;
`
```

```jsx noeditor
<Heading level="3" size="1">styled-system</Heading>
```

styled-system is a Styled Components helper library that provides some nice functions for tying parts of the theme object to properties on components.

```jsx static
import { space, SpaceProps } from 'styled-system'

interface PersonProps extends SpaceProps {
  name: string
  age: number
}

const BasePersonDetail = (props: PersonProps) => {
  return (
    <Box>
      <Heading>{props.name}</Heading>
      <Text>Age: {props.age}</Text>
    </Box>
  )
}

// space adds some margin and padding properties to the underlying component
// which are tied into the Theme object. See SpaceProps and Box.tsx for good examples.
const PersonDetail = styled<PersonProps>(BasePersonDetail)`
  ${space}
  border: 2px solid black;
`

// Example use of the resulting component:
<PersonDetail mx={1} person={person} />
```
