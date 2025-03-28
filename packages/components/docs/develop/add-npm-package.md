# Add npm Package

To add Looker UI Components to your project, add the [npm package](https://www.npmjs.com/package/@looker/components) to your project:

```bash
# Looker projects generally utilize npm (https://npm.org/)
npm install --save @looker/components styled-components react react-dom lodash
```

## Using Typescript?

If you're using Typescript you'll also need to add the type definitions for Styled Components.

```bash
npm install --save-dev @types/styled-components @types/react @types/react-dom @types/styled-system
```

## Setup

`@looker/components` expects two prerequisites to exist for the complete styling to be applied:

### Web Font Loading

Users may not have the `@looker/components` default font, Roboto, installed on their computers so we recommend importing the font to ensure that content is rendered with the proper font-face.

The `<GoogleFontsLoader />` component will automatically load any fonts specified in the theme from Google Fonts if they're not already available on the device. This can also be done by adding the `loadGoogleFonts` prop on `ComponentsProvider`

```tsx
<ComponentsProvider loadGoogleFonts>...</ComponentsProvider>
```

## Using a Component

Now that we have `@looker/components` installed we can start using them in our application. To get things started import some components:

```tsx
import { Card, ComponentsProvider, theme } from '@looker/components'

<ComponentsProvider>
  <Card>{Source here...}</Card>
</ComponentsProvider>
```

Which could be used to render the following:

```tsx
<Card raised>
  <CardContent>
    <Heading fontWeight="semiBold" textTransform="capitalize">
      Welcome to Looker Components
    </Heading>
    <Text>Looker's component library</Text>
  </CardContent>
</Card>
```

Try editing the code above, you should see the changes appear live.

These live editing blocks are found throughout our style guide documentation, providing a space for rapid experimentation with components.
