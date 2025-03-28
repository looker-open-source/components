# Breakpoints

Breakpoints give hooks for components and layouts to adapt and change in relation to the window size of the users device.

We use a mobile first approach to breakpoints, that means we use the `min-width` property for our media queries. This technique is used for applying basic layout styles first and then using breakpoints to adjust for wider screens.

## Available Breakpoints

There are a few ways to use the breakpoints, for simpler responsive behaviors you can use them as an array of values inline like

```tsx
<Box2 bg={['green', 'blue', 'red', 'purple']} p="u10" color="white">
  My background changes color as you resize the window
</Box2>
```

Another option if you are writing more complex responsive behaviors you can access the breakpoints from the theme and use them a styled block

```ts
const ResponsiveBox = styled(Box)`
  background: green;

  // make the background red at breakpoint[0](480px)
  @media (min-width ${({ theme }) => theme.breakpoints[0]}) {
    background: red;
  }

  // make the background red at breakpoint[1](768x)
  @media (min-width ${({ theme }) => theme.breakpoints[1]}) {
    background: blue;
  }
`;
```
