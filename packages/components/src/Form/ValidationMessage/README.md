# ValidationMessage

```tsx
function Basic(props: ValidationMessageProps) {
  const { message = 'Error', type = 'error', ...restProps } = props;
  return <ValidationMessage message={message} type={type} {...restProps} />;
}
```
