# Tabs

_As compared with Tabs2, Tabs is the more composable version and should be used when custom behavior is required, e.g. icon actions within the tab button._

`Tabs` expects to receive a `TabList` with one or more `Tab` components. `TabPanels` expects `TabPanel`(s). `Tabs` manages the visibility of a single `TabPanel` based on its internal state.

The order in which elements are placed inside `TabList` and `TabPanels` defines the relationship between them. The first `Tab` is related to the first `TabPanel` and so on.

```tsx
function Basic() {
  const tabs = new Array(3).fill('tab');
  const tabPrefix = 'My Awesome Tab';
  return (
    <Tabs>
      <TabList>
        {tabs.map((_k, index) => (
          <Tab key={index}>
            {tabPrefix} {index}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((_k, index) => (
          <TabPanel key={index}>This is {index}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
```

## Horizonal Scroll

`Tabs` supports scrolling when the tabs' combined width cannot be accomdated within the viewport width. - Try scrolling left-right.

```tsx
function Basic() {
  const tabs = new Array(20).fill('tab');
  const tabPrefix = 'My Awesome Tab';
  return (
    <Tabs>
      <TabList>
        {tabs.map((_k, index) => (
          <Tab key={index}>
            {tabPrefix} {index}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((_k, index) => (
          <TabPanel key={index}>This is {index}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
```

## Disabled Tab(s)

To create a disabled Tab add the `disabled` prop. NOTE: A `TabPanel` must still exist for disabled tabs to allow for tabs to keep the index positions in sync.

## Distribute Attribute

Using the distribute prop on `TabList` will equally distributed each `Tab` in the container.

```tsx
function Distributed() {
  const tabs = new Array(3).fill('tab');
  const tabPrefix = 'My Awesome Tab';
  return (
    <Tabs>
      <TabList distribute>
        {tabs.map((_k, index) => (
          <Tab key={index}>
            {tabPrefix} {index}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((_k, index) => (
          <TabPanel key={index}>This is {index}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
```

## Controlled Tab

```tsx
function Distributed() {
  const [currentTabIndex, setTab] = useState(0);
  return (
    <>
      <Space>
        <Button onClick={() => setTab(0)}>Go to A</Button>
        <Button onClick={() => setTab(1)}>Go to B</Button>
      </Space>
      <Tabs index={currentTabIndex} onChange={setTab}>
        <TabList>
          <Tab>A</Tab>
          <Tab>B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>A</TabPanel>
          <TabPanel>B</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
```
