# Paragraph

Renders a block level `<Paragraph />` element on the page.

```tsx
function Basic() {
  return <Paragraph>Paragraph Text</Paragraph>;
}
```

By default, paragraphs inherit the font size of the parent element.

## Truncate

At times you may want your `<Paragraph />` to truncate instead of the text wrapping, the `truncate` property will do that for you. For a multiline truncate, use `truncateLines`.

```tsx
function Truncate() {
  return (
    <Paragraph truncate={true}>
      This is a really long title that will need to truncate. It's gotta get
      real long so it hits the edge of the jest-dom virtual window size so I'm
      going to just keep typing and typing to make sure it triggers overflow as
      needed to prove that this is work properly. Are we there yet? Maybe? I
      sure hope so!
    </Paragraph>
  );
}
```

```tsx
function MultilineTruncate() {
  return (
    <Paragraph truncateLines={2}>
      This is a really long title that will need to truncate. It's gotta get
      real long so it hits the edge of the jest-dom virtual window size so I'm
      going to just keep typing and typing to make sure it triggers overflow as
      needed to prove that this is work properly. Are we there yet? Maybe? I
      sure hope so!
    </Paragraph>
  );
}
```

## Text Alignment

You can use the `textAlign` property to change the alignment of the rendered text, below is an example with aligned text put into `<Card />`s.

```tsx
function TextAlign() {
  return (
    <>
      <Card>
        <CardContent>
          <Paragraph> I am aligned left by default</Paragraph>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Paragraph textAlign="center">
            This is how you can center align Paragraph text
          </Paragraph>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Paragraph textAlign="right">
            This is how you can right align Paragraph text
          </Paragraph>
        </CardContent>
      </Card>
    </>
  );
}
```
