# Default Width Sidebar

```tsx
function DefaultWidthSidebar() {
  return <Aside width="sidebar" />;
}
```

# Width Navigation

```tsx
function WidthNavigation() {
  return <Aside width="navigation" />;
}
```

# Width Rail

```tsx
function AsideWidthRail() {
  return <Aside width="rail" />;
}
```

# Collapse

```tsx
function AsideCollapse(props: AsideProps) {
  const { value, toggle } = useToggle(false);

  return (
    <Space>
      <Aside collapse={!value} {...props}>
        Aside content
      </Aside>
      <FieldToggleSwitch
        m="small"
        label="Show Aside"
        onChange={toggle}
        on={value}
      />
    </Space>
  );
}
```

# Border

```tsx
function BorderBottom() {
  return (
    <Aside p="u5" text-align="center" border borderBottom="key">
      border-bottom
    </Aside>
  );
}
```

```tsx
function BorderLeft() {
  return (
    <Aside p="u5" text-align="center" border borderLeft="key">
      border-left
    </Aside>
  );
}
```

```tsx
function BorderRight() {
  return (
    <Aside p="u5" text-align="center" border borderRight="key">
      border-right
    </Aside>
  );
}
```

```tsx
function BorderTop() {
  return (
    <Aside p="u5" text-align="center" border borderTop="key">
      border-top
    </Aside>
  );
}
```

```tsx
function BorderX() {
  return (
    <Aside p="u5" text-align="center" border borderX="key">
      border-left and border-right
    </Aside>
  );
}
```

```tsx
function BorderY() {
  return (
    <Aside p="u5" text-align="center" border borderY="key">
      border-bottom and border-top
    </Aside>
  );
}
```
