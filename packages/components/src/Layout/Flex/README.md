# Flex

`Flex` has been deprecated. Use a more specific layout helper such as `Space` or `SpaceVertical` or `Grid`.

The `Flex` component creates a flex container for you to place `FlexItem` components inside. It lets you utilize [flex box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) to create a wide variety of layouts, with powerful alignment, directional, and space distribution abilities.

If you are not familiar with flex box, [here is a great guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for how it works.

## Basic Usage

The `Flex` component has the ability to control the layout direction and order of its children. By default the children will layout in a row.

```tsx
function Basic() {
  return (
    <Flex>
      <FlexItem>👋</FlexItem>
      <FlexItem>💪</FlexItem>
      <FlexItem>📦</FlexItem>
    </Flex>
  );
}
```

## Changing direction and order

You can change the layout direction and order of flex children by using the `flexDirection` property. Below we use the same children in each example but can adjust the layout quickly using `flexDirection`.

```tsx
function ChangeDirectionOrder() {
  return (
    <Flex>
      <Flex mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="column" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="column-reverse" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="row-reverse" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
    </Flex>
  );
}
```

## Item distribution

The `Flex` component allows you to control how its children are distributed within its container. Using the `justifyContent` property you can adjust the distribution of the children.

Here is a visual example of how using `justifyContent` affects the distribution of items in a `Flex` component.

```tsx
function ItemDistribution() {
  return (
    <>
      <Flex justifyContent="flex-start" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-evenly" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" mb="u4" bg="ui1">
        <Box>
          <Text fontSize="xxxxlarge">🕺</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">🎶</Text>
        </Box>
        <Box>
          <Text fontSize="xxxxlarge">💃</Text>
        </Box>
      </Flex>
    </>
  );
}
```

## Aligning Items

Flex box allows for quickly adjusting the alignment of items inside the flex container.

Here is an example of using `alignItems` to adjust how items are aligned within the flex container.

```tsx
function AlignItems() {
  return (
    <>
      <Flex mb="u10">
        <FlexItem p="u10" bg="ui1">
          Default (stretch)
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          One
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Two
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Three
        </FlexItem>
      </Flex>
      <Flex alignItems="center" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Center
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          One
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Two
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Three
        </FlexItem>
      </Flex>
      <Flex alignItems="flex-start" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Start
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
      <Flex alignItems="flex-end" mb="u10">
        <FlexItem p="u10" bg="ui1">
          End
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
      <Flex alignItems="baseline" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Baseline
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
    </>
  );
}
```

## Aligning Content

If you have multiple rows of flex items, the `alignContent` property determines how the rows are distributed within the flex container.

```tsx
function AlignContent() {
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex
          alignContent="space-around"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="key"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui1">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui1">
            Space
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui1">
            Between
          </FlexItem>
        </Flex>
        <Flex
          alignContent="flex-end"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="inform"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui2">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui2">
            Flex
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui2">
            End
          </FlexItem>
        </Flex>
        <Flex
          alignContent="center"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="positive"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui3">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui3">
            Flex
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui3">
            Center
          </FlexItem>
        </Flex>
      </Flex>
    </>
  );
}
```

## Wrapping Flex Items

The `flexWrap` property determines if flex items should be forced into a single line or if they can wrap onto multiple lines.

```tsx
function Wrapping() {
  return (
    <>
      <Flex width="80%" flexWrap="nowrap" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will NOT
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap
        </FlexItem>
      </Flex>
      <Flex width="50%" flexWrap="wrap" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap
        </FlexItem>
      </Flex>
      <Flex width="50%" flexWrap="wrap-reverse" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap Reverse
        </FlexItem>
      </Flex>
    </>
  );
}
```

## Responsive Behavior

Many of the properties you can set on the `Flex` component will accept an array of values that will then be applied at different breakpoints. There are 5 [breakpoints](/#!/Breakpoints) slots that you can target. Here is an example of what that looks like.

```tsx
function Responsive() {
  return (
    <>
      <Flex
        flexDirection={[
          'column', // column up to the first breakpoint
          null, // stay a column past first breakpoint
          'row', // switch to row layout after second breakpoint
        ]}
      >
        <FlexItem p="u4" bg="ui5">
          👋
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          💪
        </FlexItem>
        <FlexItem p="u4" bg="ui1">
          📦
        </FlexItem>
      </Flex>
    </>
  );
}
```

## FlexItem

The `FlexItem` component lets you have more control of the properties that apply to just children inside a `Flex` container. These properties affect how a flex item aligns its self, it's order, and how it resizes to fill the available space in the flex container.

### Adjusting Individual Alignment

Using the `alignSelf` property on a `FlexItem` allows you to override the the `alignItems` value from the flex container. This is useful if you need to adjust how a single flex item aligns itself in the container.

```tsx
function IndividualAlignment() {
  return (
    <>
      <Flex height="200px" bg="key">
        <FlexItem alignSelf="flex-start">
          <Box m="u3" p="u5" bg="ui1">
            Flex Start
          </Box>
        </FlexItem>
        <FlexItem alignSelf="flex-end">
          <Box m="u3" p="u5" bg="ui1">
            Flex End
          </Box>
        </FlexItem>
        <FlexItem alignSelf="center">
          <Box m="u3" p="u5" bg="ui1">
            Center
          </Box>
        </FlexItem>
        <FlexItem alignSelf="baseline">
          <Box m="u3" p="u5" bg="ui1">
            Baseline
          </Box>
        </FlexItem>
      </Flex>
    </>
  );
}
```

### Item Order

By default flex items are laid our in source order, the `order` property on a `FlexItem` allows you to adjust how an individual flex item is is ordered in a flex container.

**Note:** the `order` value default is `0`, so setting an `order="1"` will put the item at the end unless another flex item has a higher `order` set. You can also use negative numbers to set an item at the beginning.

```tsx
function ItemOrder() {
  return (
    <>
      <Flex bg="ui1" mb="u5">
        <FlexItem>
          <Box m="u3" p="u5" bg="ui2">
            0
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui1">
            1
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui3">
            2
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui5" color="inverseOn">
            3
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui4">
            4
          </Box>
        </FlexItem>
      </Flex>
      <Flex bg="ui1">
        <FlexItem>
          <Box m="u3" p="u5" bg="ui2">
            0
          </Box>
        </FlexItem>
        <FlexItem order="2">
          <Box m="u3" p="u5" bg="ui1">
            1
          </Box>
        </FlexItem>
        <FlexItem order="1">
          <Box m="u3" p="u5" bg="ui3">
            2
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui5" color="inverseOn">
            3
          </Box>
        </FlexItem>
        <FlexItem order="-1">
          <Box m="u3" p="u5" bg="ui4">
            4
          </Box>
        </FlexItem>
      </Flex>
    </>
  );
}
```

### Controlling Item Size

The `FlexItem` has two properties for managing its size. You can use the `flexBasis` property or the `flex` property.

#### Flex Basis example.

The `flexBasis` property defines the flex-items' default size before the remaining space is distributed.

```tsx
function FlexBasis() {
  return (
    <>
      <Flex>
        <FlexItem flexBasis="20%">
          <Box p="u3" m="u3" bg="ui4">
            I am 20% of container
          </Box>
        </FlexItem>
        <FlexItem flexBasis="5.5rem">
          <Box p="u3" m="u3" bg="ui3">
            I am 5.5rem of container
          </Box>
        </FlexItem>
        <FlexItem flexBasis="150px">
          <Box p="u3" m="u3" bg="ui2">
            I am 150px of container
          </Box>
        </FlexItem>
        <FlexItem>
          <Box p="u3" m="u3" bg="ui1">
            I am sized to my content
          </Box>
        </FlexItem>
      </Flex>
    </>
  );
}
```

### Flex Example

The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis` properties. It specifies how a flex item will grow or shrink to fit the space in its flex container.

**Note**: The `flex` syntax can be a bit confusing, if you need a more detail set of examples check out this [MDN flex overview](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

### Flex Grow Example

Below we set the flex grow value of the first flex item to `2` so it will take up a factor of two in the flex container

```tsx
function FlexGrow() {
  return (
    <>
      <Flex>
        <FlexItem flex="2">
          <Box p="u3" bg="ui4">
            Flex: 2
          </Box>
        </FlexItem>
        <FlexItem flex="1">
          <Box p="u3" bg="ui3">
            Flex: 1
          </Box>
        </FlexItem>
        <FlexItem flex="1">
          <Box p="u3" bg="ui2">
            Flex: 1
          </Box>
        </FlexItem>
      </Flex>
    </>
  );
}
```

### Flex Shrink

Below we have a flex container with a set width of 500px and each child's `flex-basis` is set to 200px. The flex shrink value on the last two flex items is set to `1` and they will now shrink so that all the flex items fit within the flex container.

```tsx
function FlexShrink() {
  return (
    <>
      <Flex width="500px">
        <FlexItem flex="1 0 200px">
          <Box p="u3" bg="ui4">
            No Shrink
          </Box>
        </FlexItem>
        <FlexItem flex="1 1 200px">
          <Box p="u3" bg="ui3">
            I'll shrink
          </Box>
        </FlexItem>
        <FlexItem flex="1 1 200px">
          <Box p="u3" bg="ui2">
            I'll shrink
          </Box>
        </FlexItem>
      </Flex>
    </>
  );
}
```
