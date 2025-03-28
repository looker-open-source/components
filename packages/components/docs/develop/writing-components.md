# Writing Components

Our components are built using the following language and libraries:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://www.styled-components.com/)
- [Styled System](https://github.com/jxnblk/styled-system)

You **don't** have to be an expert in all of those technologies to start using Looker components today, but it's good to have an understanding about why they were chosen and how they are employed inside Looker UI Components when writing new components.

The following technologies roughly form a "stack", in that each layer is used by the next to solve a more specific problem:

### React & Typescript

React is a Javascript library that makes it easy to build UI components as simple functions and classes.

Components are written in Typescript, which provides a structural static type system, allowing our components to define strict, enforceable interfaces.

### Styled Components

Styled Components is a css-in-js library that allows developers to write styling in Typescript and couple it directly to a component. There are pros and cons to using CSS in this way. If you want to learn more about this approach [this talk is highly recommended](https://speakerdeck.com/vjeux/react-css-in-js).

Styled Components also provides a Theme object which allows entire applications to adhere to a consistent style guide.

```tsx
interface PersonProps {
  name: string;
  age: number;
}

const BasePersonDetail = ({ name, age, ...props }: PersonProps) => {
  return (
    <Box2 {...props}>
      <Heading>{name}</Heading>
      <Text>Age: {age}</Text>
    </Box2>
  );
};

const PersonDetail = styled(BasePersonDetail)`
  border: 2px solid black;
`;
```

### Styled System

Styled System is a Styled Components helper library that provides some nice functions for tying parts of the theme object to properties on components. The entire library, and its types, are exported from for use in Looker projects.

```tsx
import { space, SpaceProps } from '@looker/design-tokens'

interface PersonProps extends SpaceProps {
  name: string
  age: number
}

const BasePersonDetail = ({ name, age, ...props }: PersonProps) => {
  return (
    <Box2 {...props}>
      <Heading>{name}</Heading>
      <Text>Age: {age}</Text>
    </Box2>
  )
}

// `space` adds some margin and padding properties to the underlying component
// which are tied into the theme object. See SpaceProps and Box.tsx for good examples.
const PersonDetail = styled(BasePersonDetail)`
  ${space}
  border: 2px solid black;
`

// Example use of the resulting component:
<PersonDetail mx="small" age={21} name="Becky" />
```
