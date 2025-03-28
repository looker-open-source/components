# FieldSlider

The `<FieldSlider />` component is composed of an `<Slider />` component and a `<Label />` component. The component also allows for the attributes `details` and `description`. This component does not support `ValidationMessage`

```tsx
function Basic(props: FieldSliderProps) {
  return <FieldSlider label="Basic" max={5} min={0} {...props} />;
}
```
