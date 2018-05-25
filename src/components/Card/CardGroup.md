## Grouping Cards

Often times `Cards` are grouped together as a way to display them in an orderly way.

```js
<CardGroup>
 <Card>
    <CardContent>
      <Heading size="d3" align="center">🍕</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🥑🥑</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🌶🌶🌶</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🍏🍏🍏🍏</Heading>
    </CardContent>
  </Card>
</CardGroup>

```

### Card Spacing

A `Card` in the `CardGroup` component will resize to allow as many cards to fit in one row with our going below its minimum width of 200px, with a gap in between each card.

If you want to adjust the gap between each card, you can use the `gap` property which accepts any [Spacing Values](/#!/Spacing)

```js
<CardGroup gap="4xl">
  <Card>
    <CardContent>
      <Heading size="d3" align="center">🍕</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🥑🥑</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🌶🌶🌶</Heading>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Heading size="d3" align="center">🍏🍏🍏🍏</Heading>
    </CardContent>
  </Card>
</CardGroup>
```

