# Box

`<Box />` is a low level component whose primary purpose is to provide a utility for easily controlling the spacing around elements in a consistent way using the [spacing values](/#!/Spacing).

```tsx
function Basic() {
  return (
    <Space around>
      <Box bg="white" p="u8">
        On White
      </Box>
      <Box bg="ui1" p="u8">
        On `ui1`
      </Box>
      <Box bg="ui2" p="u8">
        On `ui2`
      </Box>
    </Space>
  );
}
```

## Spacing with Box

The `<Box />` component allows you to control it's margin and padding properties for a chosen side.

Using spacing on a `<Box />` is like following a recipe, you select:

1. The type of spacing, margin or padding
1. The side to apply it to
1. The amount of space to apply

To get the correct spacing you choose one value from each of the above columns. For example, to get 8px of margin on the right side you would do. `<Box mr="u2">` or if you wanted 40px of padding on all sides you would do `<Box p="u10">`.

You can combine different spacing recipes to apply spacing to multiple sides at one time. For example if you wanted 16px of margin on the left and 20px of padding on the top you would do `<Box ml="u4" pt="u5">`

```tsx
function Spacing() {
  return (
    <>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" m="u5">
          Margin All Sides - 20px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pl="u1">
          Padding left - 4px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pl="u4">
          Padding left - 16px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" my="u10" ml="u8">
          Margin Top & Bottom - 40px, Margin left - 32px
        </Box>
      </Space>
      <Space bg="ui2" m="u1">
        <Box bg="ui3" pb="u12" ml="u15">
          Padding Bottom - 48px, Margin left - 60px
        </Box>
      </Space>
    </>
  );
}
```

### Spacing Responsively

Any one of the spacing properties can be passed an array of spacing sizes that will then apply at different breakpoints. There are 5 breakpoints slots that you can target. Here is an example of what that looks like.

```tsx
function SpacingResponsively() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        pl={[
          'u2', // 8px spacing up to the first breakpoint
          'u4', // 15px spacing after first breakpoint
          'u8', // xlarge spacing after second breakpoint
          'u12', // xxxlarge spacing after third breakpoint
        ]}
      >
        My padding on the left changes with breakpoints
      </Box>
    </Space>
  );
}
```

## Customizing a Box

Boxes provide a low-level customization interface which allows them to have different display properties, heights, widths, background colors, positioning, etc. Here are some examples:

### Customized Display

```tsx
function Customized() {
  return (
    <Space bg="ui3" m="u1">
      <Box display="inline">I'm inline.</Box>
      <Box display="inline">I'm also inline.</Box>
    </Space>
  );
}
```

### Heights and Widths

```tsx
function HeightsWidths() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        display="inline-block"
        height="100px"
        bg="positive"
        color="inverseOn"
        p="u3"
        minWidth="200px"
      >
        I'm 100px tall.
      </Box>
      <Box
        display="inline-block"
        height="50px"
        bg="inform"
        color="inverseOn"
        ml="u3"
        p="u3"
        width="100px"
        fontSize="small"
      >
        I'm 50px tall.
      </Box>
    </Space>
  );
}
```

### Background Colors

Boxes can reference colors from the theme object, pulling any color on the theme's `colors` property.

```tsx
function BackgroundColors() {
  return (
    <Space bg="ui3" m="u1">
      <Box bg="positive" color="inverseOn" p="u4">
        My background is <Code>positive</Code>.
      </Box>
    </Space>
  );
}
```

### Positioning

Boxes can set positioning when needed.

```tsx
function Positioning() {
  return (
    <Space bg="ui3" m="u1">
      <Box p="u3" position="relative">
        <Box
          position="absolute"
          top="0"
          right="0"
          bg="negative"
          color="inverseOn"
        >
          I'm absolutely positioned!
        </Box>
      </Box>
    </Space>
  );
}
```

### Borders

Boxes can have borders.

```tsx
function Borders() {
  return (
    <Space bg="ui3" m="u1">
      <Box
        width="50px"
        height="50px"
        bg="keyAccent"
        border="ui3"
        borderRadius="4px"
      >
        I've got borders.
      </Box>
    </Space>
  );
}
```
