# List

`List`, along with its companion component `ListItem`, renders a list of items. However, unlike standard `ul` and `li` elements, `List` and `ListItem` come prebuilt with a number of props to simplify item style and behavior customization.

```tsx
function Basic() {
  return (
    <List>
      <ListItem
        icon={<MaterialIcons.SportsSoccer />}
        description="Orange-y"
        detail="England"
      >
        Cheddar
      </ListItem>
      <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
        Gouda
      </ListItem>
      <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
        Mozzarella
      </ListItem>
      <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
        Swiss
      </ListItem>
    </List>
  );
}
```

## Font Family

Use the `fontFamily` prop to change the font on all text elements in the `List`. The prop accepts the following values:

- body
- brand
- code

```tsx
function FontFamily() {
  const [family, setFamily] = useState<FontFamilies>('code');

  return (
    <>
      <ButtonToggle
        value={family}
        onChange={val => setFamily(val as FontFamilies)}
      >
        <ButtonItem>body</ButtonItem>
        <ButtonItem>brand</ButtonItem>
        <ButtonItem>code</ButtonItem>
      </ButtonToggle>
      <List fontFamily={family}>
        <ListItem
          icon={<MaterialIcons.SportsSoccer />}
          description="Orange-y"
          detail="England"
        >
          Cheddar
        </ListItem>
        <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
          Gouda
        </ListItem>
        <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
          Mozzarella
        </ListItem>
        <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
          Swiss
        </ListItem>
      </List>
    </>
  );
}
```

## Color

Use the `color` prop to change the text color within the list. Accepts the following values:

- calculation
- dimension
- key
- measure

```tsx
function Color() {
  const [colorVal, setColorVal] = useState<ListColor>('calculation');
  return (
    <>
      <ButtonToggle
        value={colorVal}
        onChange={(draftValue: string) => setColorVal(draftValue as ListColor)}
      >
        <ButtonItem>calculation</ButtonItem>
        <ButtonItem>dimension</ButtonItem>
        <ButtonItem>key</ButtonItem>
        <ButtonItem>measure</ButtonItem>
      </ButtonToggle>
      <List color={colorVal}>
        <ListItem
          icon={<MaterialIcons.SportsSoccer />}
          description="Orange-y"
          detail="England"
        >
          Cheddar
        </ListItem>
        <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
          Gouda
        </ListItem>
        <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
          Mozzarella
        </ListItem>
        <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
          Swiss
        </ListItem>
      </List>
    </>
  );
}
```

## Density

Use the `density` prop to set the size and spacing of your `List`. As `density` decreases, so does the height and spacing of your `List`'s child `ListItem`s.

`density` values range from -3 to 1.

```tsx
function Density() {
  const [currentDensity, setCurrentDensity] = useState<DensityRamp>(0);

  return (
    <>
      <ButtonToggle
        value={String(currentDensity)}
        onChange={(draftValue: string) =>
          setCurrentDensity(parseInt(draftValue) as DensityRamp)
        }
      >
        <ButtonItem>-3</ButtonItem>
        <ButtonItem>-2</ButtonItem>
        <ButtonItem>-1</ButtonItem>
        <ButtonItem>0</ButtonItem>
        <ButtonItem>1</ButtonItem>
      </ButtonToggle>

      <List density={currentDensity}>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 1</ListItem>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 2</ListItem>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 3</ListItem>
      </List>
    </>
  );
}
```

## Icon Gutter

Use the `iconGutter` prop if you want `ListItem` children without icons to align their text with `ListItem` children with icons.

```tsx
function FontFamily() {
  return (
    <List iconGutter>
      <ListItem icon={<MaterialIcons.DateRange />}>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  );
}
```

## Windowing

If a `List` contains more than 100 children it will use windowing to display
only the visible items for performance reasons. Windowing uses the item height to calculate
positioning for natural scrolling behavior.

**Note:** A parent element of your `List` should have an explicit height. If no explicit height is set, your `List` will attempt to render all child items and not utilize the windowing logic.

```tsx
const array3000 = Array.from(Array(3000), (_, i) => String(i));
function LongList() {
  return (
    <Space height={300}>
      <List width={200}>
        {array3000.map((item, i) => (
          <ListItem key={i}>
            {i > 0 && i % 30 === 0
              ? 'Longlonglonglonglonglonglonglonglonglonglong'
              : item}
          </ListItem>
        ))}
      </List>
      <div>
        Without width on List, windowing plus variable item widths causes the
        layout to be unstable.
      </div>
    </Space>
  );
}
```
