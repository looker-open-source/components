# Divider

Dividers accept all the spacing props from `<Box />`, which gives you the ability to easily put spacing around your dividers. By default a divider's background color will be `charcoal300`

```tsx
function Basic() {
  return (
    <Space around>
      <Box bg="white" p="u8">
        On White
        <Divider mt="u4" />
      </Box>
      <Box bg="ui1" p="u8">
        On `ui1`
        <Divider mt="u4" />
      </Box>
      <Box bg="ui2" p="u8">
        On `ui2`
        <Divider mt="u4" />
      </Box>
    </Space>
  );
}
```

## Appearance

There are three divider appearances `light`, `dark` and `onDark`.

```tsx
function Appearance() {
  return (
    <Space around>
      <Box bg="white " p="u8">
        light appearance
        <Divider mt="u4" appearance="light" />
      </Box>
      <Box bg="ui1" p="u8">
        dark appearance
        <Divider mt="u4" appearance="dark" />
      </Box>
      <Box bg="ui5" p="u8">
        onDark appearance
        <Divider mt="u4" appearance="onDark" />
      </Box>
    </Space>
  );
}
```

## Custom

This example shows a size of 20px and turquoise custom color.

```tsx
function Custom() {
  const args: DividerProps = {
    customColor: 'turquoise',
    size: '20px',
  };
  return <Divider {...args} />;
}
```

# DividerVertical

`<DividerVertical />` has a default height of 1rem. That can be changed by using the prop `height` or `stretch`. Do not use both props.

```tsx
function Basic() {
  return (
    <>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} />
        <DividerVertical />
        <Span>2:45PM</Span>
      </SpaceVertical>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} />
        <DividerVertical height="3rem" />
        <Span>2:45PM</Span>
      </SpaceVertical>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} size="large" />
        <DividerVertical height="100px" />
        <Span pl="u5" fontSize="xxxxlarge">
          2:45PM
        </Span>
      </SpaceVertical>
    </>
  );
}
```
