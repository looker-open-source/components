# ProgressDuet

The `ProgressDuet` helps express an unspecified wait time when processing LLM requests. This is as an alternative to the more generic ProgressCircular spinner, for use in branded Duet AI experiences.

## Showing a generic loading state

Render ProgressDuet to indicate an indeterminate loading state. The component automatically expands width to fill the container, so it is shown here rendered within a Card component to constrain width.

```tsx
function Basic() {
  return (
    <Card maxWidth={500}>
      <CardContent>
        <ProgressDuet />
      </CardContent>
    </Card>
  );
}
```
