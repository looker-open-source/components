# Legend

```tsx
function Basic(props: LegendProps) {
  const { children = 'I am legend', ...restProps } = props;
  return <Legend {...restProps}>{children}</Legend>;
}
```
