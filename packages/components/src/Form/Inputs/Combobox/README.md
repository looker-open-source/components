# Combobox

For the vast majority of use cases, you should be using the [Select input](?path=/docs/docs-select--docs) instead of rendering Combobox directly. Combobox is the lower-level abstraction used for rendering Select.

```tsx
function Basic(props: ComboboxProps) {
  const { width = 300, ...restProps } = props;
  return (
    <Combobox width={width} {...restProps}>
      <ComboboxInput />
      <ComboboxList>
        <ComboboxOption value="Apples super long text to see what wrapping looks like" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
        <ComboboxOption
          value=""
          label="Create New Option"
          highlightText={false}
        />
      </ComboboxList>
    </Combobox>
  );
}
```

## Controlled Component

```tsx
function Controlled(props: ComboboxProps) {
  const {
    width = 300,
    value: valueProp = {
      value: 'Bananas',
    },
    onChange: _onChange,
    ...restProps
  } = props;

  const [option, setOption] = useState<MaybeComboboxOptionObject>(valueProp);

  const handleChange = (newOption: MaybeComboboxOptionObject) => {
    setOption(newOption);
  };

  const handlePineappleClick = () => {
    setOption({ value: 'Pineapples' });
  };

  return (
    <Space>
      <Button onClick={handlePineappleClick}>Select Pineapples</Button>
      <Combobox
        width={width}
        value={option}
        onChange={handleChange}
        {...restProps}
      >
        <ComboboxInput />
        <ComboboxList>
          <ComboboxOption value="Apples" />
          <ComboboxOption value="Oranges" />
          <ComboboxOption value="Grapes" />
          <ComboboxOption value="Bananas" />
          <ComboboxOption value="Pineapples" />
          <ComboboxOption value="Apples2" />
          <ComboboxOption value="Oranges2" />
          <ComboboxOption value="Grapes2" />
          <ComboboxOption value="Bananas2" />
          <ComboboxOption value="Pineapples2" />
          <ComboboxOption value="Apples3" />
          <ComboboxOption value="Oranges3" />
          <ComboboxOption value="Grapes3" />
          <ComboboxOption value="Bananas3" />
          <ComboboxOption value="Pineapples3" />
          <ComboboxOption value="Apples4" />
          <ComboboxOption value="Oranges4" />
          <ComboboxOption value="Grapes4" />
          <ComboboxOption value="Bananas4" />
          <ComboboxOption value="Pineapples4" />
        </ComboboxList>
      </Combobox>
    </Space>
  );
}
```

## Loading Indicator

Combobox doesn't have built-in functionality for handling a loading state. We recommend handling state externally and setting a custom ComboboxOption indicating that more options are loading.

```tsx
function LoadingState(props: ComboboxProps) {
  const { width = 300, ...restProps } = props;

  const [loading, setLoading] = useState(true);

  const handleLoadingStart = () => {
    setLoading(true);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Space>
      {loading ? (
        <Button onClick={handleLoadingComplete}>Stop Loading</Button>
      ) : (
        <Button onClick={handleLoadingStart}>Start Loading</Button>
      )}

      <Combobox
        width={width}
        {...restProps}
        value={loading ? { value: '' } : undefined}
      >
        <ComboboxInput />
        <ComboboxList>
          {loading ? (
            <ComboboxOption value="Loading..." />
          ) : (
            <>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
            </>
          )}
        </ComboboxList>
      </Combobox>
    </Space>
  );
}
```

## Customizing the indicator

Open the select menu to see the custom indicator appear on hover.

```tsx
const Indicator = ({ isActive, isSelected }: OptionIndicatorProps) => {
  let indicator;

  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }
  return <>{indicator}</>;
};

function CustomIndicator(props: ComboboxProps) {
  const { width = 300, ...restProps } = props;

  return (
    <Combobox width={width} value={{ value: 'Grapes' }} {...restProps}>
      <ComboboxInput placeholder="Custom indicator" />
      <ComboboxList indicator={Indicator} persistSelection>
        <ComboboxOption value="Apples" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
      </ComboboxList>
    </Combobox>
  );
}
```

## Hiding the indicator

You can disable the option indicator entirely by setting `indicator={false}` on the ComboboxList component.

```tsx
function NoIndicator(props: ComboboxProps) {
  const { width = 300, ...restProps } = props;

  return (
    <Combobox width={width} {...restProps}>
      <ComboboxInput placeholder="indicator={false}" />
      <ComboboxList indicator={false} persistSelection>
        <ComboboxOption value="Apples" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
        <ComboboxOption
          value=""
          label="Create New Option"
          highlightText={false}
        />
      </ComboboxList>
    </Combobox>
  );
}
```

## Customizing the list width

You can set either `width`, `min-width`, or `max-width` on the ComboboxList to customize how much space the combobox will take up when the list overlay is open.

```tsx
function ListLayout() {
  const [containerWidth, setContainerWidth] = useState(400);
  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(e.target.value, 10));
  };

  return (
    <SpaceVertical p="u5">
      <Label>Move slider to adjust container width:</Label>
      <Slider
        min={100}
        max={1000}
        step={10}
        value={containerWidth}
        onChange={handleWidthChange}
        width={400}
      />
      <Card p={20} width={containerWidth + 40}>
        <SpaceVertical>
          <Combobox>
            <ComboboxInput placeholder="width=500" />
            <ComboboxList width={500}>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
              <ComboboxOption value="Grapes" />
              <ComboboxOption value="Bananas" />
              <ComboboxOption value="Pineapples" />
            </ComboboxList>
          </Combobox>
          <Combobox>
            <ComboboxInput placeholder="minWidth=420" />
            <ComboboxList minWidth={420}>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
              <ComboboxOption value="Grapes" />
              <ComboboxOption value="Bananas" />
              <ComboboxOption value="Pineapples" />
            </ComboboxList>
          </Combobox>
        </SpaceVertical>
      </Card>
    </SpaceVertical>
  );
}
```

## Render List Inline

You can set `shouldRenderListInline` to true and it will render directly above or below the input, depending on your compositional placement.

```tsx
function ShouldRenderListInline(props: ComboboxProps) {
  const { width = 300, ...restProps } = props;
  return (
    <Combobox width={width} {...restProps} shouldRenderListInline>
      <ComboboxInput />
      <ComboboxList>
        <ComboboxOption value="Apples" />
        <ComboboxOption value="Oranges" />
        <ComboboxOption value="Grapes" />
        <ComboboxOption value="Bananas" />
        <ComboboxOption value="Pineapples" />
        <ComboboxOption
          value=""
          label="Create New Option"
          highlightText={false}
        />
      </ComboboxList>
    </Combobox>
  );
}
```

## ComboboxMulti

For the vast majority of use cases, you should be using the [Select input](?path=/docs/docs-select--docs) instead of rendering ComboboxMulti directly. ComboboxMulti is the lower-level abstraction used for rendering Select.

```tsx
function Basic(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props;
  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput onClear={() => alert('CLEAR')} freeInput />
      <ComboboxMultiList>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  );
}
```

### Controlled Component

```tsx
function Controlled(props: ComboboxMultiProps) {
  const {
    width = 300,
    values: valuesProp = [{ value: 'Bananas' }],
    onChange: _onChange,
    ...restProps
  } = props;

  const [options, setOptions] = useState<ComboboxOptionObject[]>(valuesProp);
  const handleMultiChange = (newOptions: ComboboxOptionObject[]) => {
    setOptions(newOptions);
  };

  return (
    <ComboboxMulti
      width={width}
      values={options}
      onChange={handleMultiChange}
      {...restProps}
    >
      <ComboboxMultiInput onClear={() => alert('CLEAR')} freeInput />
      <ComboboxMultiList>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  );
}
```

### Controlled Input Value

```tsx
function ControlledInputValue(props: ComboboxMultiProps) {
  const {
    width = 300,
    values: valuesProp = [{ value: 'Apples' }],
    onChange: _onChange,
    ...restProps
  } = props;

  const [inputValue, setInputValue] = useState('starting value');
  const [values, setValues] = useState(valuesProp);
  const handleClick = () => setInputValue('bananas');
  return (
    <SpaceVertical width={width} align="start">
      <Paragraph>Current inputValue: {inputValue}</Paragraph>
      <Button onClick={handleClick}>Change Input Value</Button>
      <ComboboxMulti values={values} onChange={setValues} {...restProps}>
        <ComboboxMultiInput
          autoComplete={false}
          inputValue={inputValue}
          onInputChange={setInputValue}
          freeInput
        />
        <ComboboxMultiList persistSelection>
          <ComboboxMultiOption value="Apples" />
          <ComboboxMultiOption value="Oranges" />
          <ComboboxMultiOption value="Grapes" />
          <ComboboxMultiOption value="Bananas" />
          <ComboboxMultiOption value="Pineapples" />
        </ComboboxMultiList>
      </ComboboxMulti>
    </SpaceVertical>
  );
}
```

### Customizing the indicator

Open the select menu to see the custom indicator appear on hover.

```tsx
const Indicator = ({ isActive, isSelected }: OptionIndicatorProps) => {
  let indicator;

  if (isSelected) {
    indicator = '>>';
  } else if (isActive) {
    indicator = '>';
  } else {
    indicator = '';
  }
  return <>{indicator}</>;
};

function CustomIndicator(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props;

  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput
        onClear={() => alert('CLEAR')}
        placeholder="Custom indicator"
      />
      <ComboboxMultiList indicator={Indicator} persistSelection>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  );
}
```

### Hiding the indicator

You can disable the option indicator entirely by setting `indicator={false}` on the ComboboxMultiList component.

```tsx
function NoIndicator(props: ComboboxMultiProps) {
  const { width = 300, ...restProps } = props;

  return (
    <ComboboxMulti width={width} {...restProps}>
      <ComboboxMultiInput
        onClear={() => alert('CLEAR')}
        placeholder="indicator={false}"
      />
      <ComboboxMultiList indicator={false} persistSelection>
        <ComboboxMultiOption value="Apples" />
        <ComboboxMultiOption value="Oranges" />
        <ComboboxMultiOption value="Grapes" />
        <ComboboxMultiOption value="Bananas" />
        <ComboboxMultiOption value="Pineapples" />
      </ComboboxMultiList>
    </ComboboxMulti>
  );
}
```

### Customizing the list width

You can set either `width`, `min-width`, or `max-width` on the ComboboxList to customize how much space the combox will take up when the list overlay is open.

```tsx
function ListLayout() {
  const [containerWidth, setContainerWidth] = useState(400);
  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(e.target.value, 10));
  };

  return (
    <SpaceVertical p="u5">
      <Label>Move slider to adjust container width:</Label>
      <Slider
        min={100}
        max={1000}
        step={10}
        value={containerWidth}
        onChange={handleWidthChange}
        width={400}
      />
      <Card p={20} width={containerWidth + 40}>
        <SpaceVertical>
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="width=500" />
            <ComboboxMultiList width={500}>
              <ComboboxMultiOption value="Apples" />
              <ComboboxMultiOption value="Oranges" />
              <ComboboxMultiOption value="Grapes" />
              <ComboboxMultiOption value="Bananas" />
              <ComboboxMultiOption value="Pineapples" />
            </ComboboxMultiList>
          </ComboboxMulti>
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="minWidth=420" />
            <ComboboxMultiList minWidth={420}>
              <ComboboxMultiOption value="Apples" />
              <ComboboxMultiOption value="Oranges" />
              <ComboboxMultiOption value="Grapes" />
              <ComboboxMultiOption value="Bananas" />
              <ComboboxMultiOption value="Pineapples" />
            </ComboboxMultiList>
          </ComboboxMulti>
        </SpaceVertical>
      </Card>
    </SpaceVertical>
  );
}
```
