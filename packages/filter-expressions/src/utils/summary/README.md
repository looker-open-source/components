# summary

The `summary` function returns a localized, human-readable summary of a
filter expression, given the expression's type, the expression itself,
and the user attributes and field, if applicable.

```tsx
() => {
  const type = 'number';
  const [expression, setExpression] = useState('[0,20],>30');
  const handleChange = value => {
    setExpression(value.expression);
  };
  return (
    <Popover
      content={
        <PopoverContent>
          <Filter
            expressionType={type}
            expression={expression}
            onChange={handleChange}
          />
        </PopoverContent>
      }
    >
      <Button>{summary({ type, expression })}</Button>
    </Popover>
  );
};
```
