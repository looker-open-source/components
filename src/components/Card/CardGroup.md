## Grouping Cards

Often times `<Card />` components are grouped together as a way to display them in an orderly way.

Use the `<CardGroup />` component to wrap a set of `<Card />`s and they will resize to allow as many cards to fit in one row with our going below its minimum width of 200px, with a gap in between each card.

```js
<CardGroup>
 <Card>
    <CardContent>
      <Text size="d3" align="center">🍕</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🥑🥑</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🌶🌶🌶</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🍏🍏🍏🍏</Text>
    </CardContent>
  </Card>
</CardGroup>

```

### Card Spacing

If you want to adjust the gap between each card, you can use the `gap` property which accepts any [Spacing Values](/#!/Spacing)

```js
<CardGroup gap="4xl">
  <Card>
    <CardContent>
      <Text size="d3" align="center">🍕</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🥑🥑</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🌶🌶🌶</Text>
    </CardContent>
  </Card>

  <Card>
    <CardContent>
      <Text size="d3" align="center">🍏🍏🍏🍏</Text>
    </CardContent>
  </Card>
</CardGroup>
```

