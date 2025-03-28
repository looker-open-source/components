# Panel

Use the `Panel` component to display content with a directional animation. All `Panel`s need to be wrapped in the `Panels` component to ensure proper animation.

```tsx
function Direction() {
  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <List>
            <Panel
              content={'content from Right...'}
              title={'Right'}
              defaultOpen={true}
              direction={'right'}
            >
              <ListItem>option A</ListItem>
            </Panel>
            <Panel
              content={'content from Left...'}
              direction={'left'}
              defaultOpen={true}
              title="Left"
            >
              <ListItem>Left</ListItem>
            </Panel>
            <ListItem>option C</ListItem>
            <ListItem>option D</ListItem>
          </List>
        </Panels>
      </Aside>
      <Section>Main stuff here...</Section>
    </Page>
  );
}
```

# usePanel

We provide a custom hook that returns the opener function and rendered panel.
Note: `panel` needs to be placed before `children`. The order in which the `panel` will be render metters for the component to be rendered correctly.

```tsx
const HookInner = () => {
  const { panel, setOpen } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook',
  });
  return (
    <>
      <ListItem onClick={() => setOpen(true)}>Option A</ListItem>
      {panel}
    </>
  );
};

function Hook() {
  return (
    <Panels>
      <List>
        <HookInner />
        <ListItem>Option B</ListItem>
      </List>
    </Panels>
  );
}
```
