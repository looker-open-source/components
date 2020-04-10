# Design Tokens

This package contains our default looker theme values, including font families, font sizes, and colors.

### ⚠️ Warning ⚠️

If you choose to import values directly from this package, you will most likely break the theme integration used in Styled Components.

### Intended Use

It can still be helpful to reference this package for the named values which can be accessed in our styled components, or to build your own theme objects.

Example of use with our themed components:

```js
import { Heading, HeadingProps } from '@looker/components'

// 'medium', 'xlarge', and 'normal' represent named values within the theme object:
const StyledHeading = styled(Heading).attrs((props: HeadingProps) => {
  return {
    mb: 'medium',
    lineHeight: 'xlarge',
    fontWeight: 'normal',
  }
})``
```

### Building your own theme

Once you've created your own theme object modeled after the values in this repo, you can override in production by wrapping components the `ComponentsProvider` (a Styled Components `ThemeProvider` is used under the hood).

```jsx
import { ComponentsProvider } from '@looker/components'

const myTheme = {
  ///... theme values here
}

const MyApp = () => {
  return (
    <ComponentsProvider theme={myTheme}>
      {/*... Looker UI Components here */}
    </ComponentsProvider>
  )
}
```
