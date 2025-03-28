# Theme

To help stay within Looker's design principles, [we publish a theme object](https://github.com/looker-open-source/components/blob/main/packages/design-tokens/src/theme.ts), along with libraries, like Styled Components and styled-system, to easily access the theme object within components. For example, when styling components using the `styled` function, the theme object becomes part of a component's props:

## ComponentsProvider

Looker Components require that a Styled Components `ThemeProvider` be available and that theme specified have the same structure that is provided by Looker Component's stock `theme` object.

The `ComponentsProvider` is provided out-of-the-box to handle all of this.

See below for information on extending the stock theme for your own use case.

NOTE: For the sake of brevity examples within the documentation generally don't show the `ComponentsProvider`. It's injected as part of the site's code sandbox setup.

```tsx
() => {
  /**
   *  import { Button, ComponentsProvider } from '@looker/components'
   **/

  return (
    <ComponentsProvider>
      <Button>Just a regular button</Button>
    </ComponentsProvider>
  );
};
```

You can use the theme's properties within your custom components:

```tsx
() => {
  /**
   *  import { Button, ComponentsProvider, theme } from '@looker/components'
   *  import styled from 'styled-components'
   **/

  const PositiveButton = styled(Button)`
    border-color: ${({ theme }) => theme.colors.positive};
    background-color: ${({ theme }) => theme.colors.positive};
  `;

  return (
    <ComponentsProvider>
      <PositiveButton>Engage!</PositiveButton>
    </ComponentsProvider>
  );
};
```

## Customizing the Theme

You can customize the theme provided by Looker Components by passing colors, fonts, and more into the `themeCustomizations` prop.

```tsx
() => {
  /**
   *  import { Button, ComponentsProvider } from '@looker/components'
   **/

  return (
    <ComponentsProvider themeCustomizations={{ colors: { key: 'hotpink' } }}>
      <Button>Pink is so Pretty!</Button>
    </ComponentsProvider>
  );
};
```

The following colors are available for customization. The first three are most likely to require customization since they are heavily used throughout the Looker Components library:

- key: Key color is applied strategically across the UI. Used for default action buttons, toggle switches, interactive component accents
- text: Default text color
- background: Default page background used for application background

These colors are less likely to require customization:

- pageBackground: Used as page background in some themes. pageBackground and background have a subtle difference, wherein the pageBackground is closer to `ui1` but blends are calculated from a more "absolute" background color (white or black)
- link: Link text color, used for Breadcrumb, link
- critical: Critical intent color used for: Delete button, error and validation messages
- warn: Warn intent color used for Warning banner
- positive: Positive intent color used for Positive banner
- inform: Inform intent color used for Info banner
- calculation: Indicates a calculated value
- dimension: Indicates dimensionality
- measure: Indicates a measure
- title: Used by Heading. This is generally identical to colors.text5
- body: Used by Paragraph, Ul/Ol. This is generally identical to colors.text5

The following font family options may be customized (use the `fontSources` property to specify the sources):

- body: Used for body text
- brand: Used for headings
- code: Used for code snippets

Additional properties to customize:

- brandAnimation: The Google Material ripple effect for pressable elements
- externalLabel: True sets the field label style to external, false sets it to the Google Material floating label style

## Nesting ComponentsProvider (ThemeProviders)

`ExtendComponentsThemeProvider` is a Styled Components' ThemeProvider that acts as a React Context and in so doing is able to support the standard behavior of nested contexts - the theme defined nearest to the component will be the version used.

```tsx
() => {
  /**
   *  import { Button, ComponentsProvider } from '@looker/components'
   **/

  return (
    <ComponentsProvider>
      <Space>
        <Button>Stock Theme</Button>

        <ExtendComponentsThemeProvider
          themeCustomizations={{ colors: { key: 'hotpink' } }}
        >
          <Button>Button with Custom Theme</Button>
        </ExtendComponentsThemeProvider>
      </Space>
    </ComponentsProvider>
  );
};
```
