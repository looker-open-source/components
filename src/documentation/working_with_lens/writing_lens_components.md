
Lens is built using the following language and libraries:

* [Typescript](typescriptlang.org)
* [React](https://reactjs.org/)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [StyledComponents](https://www.styled-components.com/)
* [styled-system](https://github.com/jxnblk/styled-system)

You **don't** have to be an expert in all of those technologies to start using Lens today, but it's good to have an understanding about why they were chosen and how they are employed inside Lens when writing new Lens components.

The following technologies roughly form a "stack", in that each layer is used by the next to solve a more specific problem:

### Typescript

Lens is written in Typescript, which provides a structural static type system, allowing Lens components to define strict, enforceable interfaces.

```jsx static
interface PersonProps {
  name: string
  age: number
}

const PersonDetail = (props: PersonProps) => ...
```

### React

React is a Javascript library that makes it easy to build UI components as simple functions and classes.

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

### JSX

JSX is an abstract syntax whose expressions look roughly like an XML tag language. In the context of React, JSX is used to define the use and composition of React components.

Because it is an abstraction, JSX can be compiled to many different targets, including mobile OSes, and even other frontend libraries like Vue.

```jsx static
<Box>
  <Heading>{props.name}</Heading>
  <Text>Age: {props.age}</Text>
</Box>
```

### Styled Components

Styled Components is a css-in-js library that allows developers to write styling in Typescript and couple it directly to a component. There are pros and cons to using CSS in this way. If you want to learn more about this approach [this talk is highly recommended](https://speakerdeck.com/vjeux/react-css-in-js).

Styled Components also provides a Theme object which allows entire applications to adhere to a consistent style guide.

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

### styled-system

styled-system is a Styled Components helper library that provides some nice functions for tying parts of the theme object to properties on components. The entire library, and its types, are exported from Lens for use in Looker projects.

```jsx static
import { space, SpaceProps } from 'looker-lens'

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

// `space` adds some margin and padding properties to the underlying component
// which are tied into the theme object. See SpaceProps and Box.tsx for good examples.
const PersonDetail = styled<PersonProps>(BasePersonDetail)`
  ${space}
  border: 2px solid black;
`

// Example use of the resulting component:
<PersonDetail mx={1} person={person} />
```
