<div class="component-desc"><p>Consistent spacing is the foundation for a well structured user interface. Lens provides a set of spacing rules that takes the guess work out of spacing UI elements.</p></div>

<div class="doc-section-divider"></div>

<section id="rules" class="doc-section">
### Spacing Values

All spacing for components align to a 8px grid, this grid allows for flexibility and consistency when designing for various screen sizes and devices. Below is the available spacing sizes as well as a visual representation of that size.
</section>

```js noeditor
  const specimen = "Open Sans is the typographic base for the tone and content of Lens’, Lookers design system"
  const spaces = [
    { space: 'xsmall', px: '4' , rem: '0.25rem'},
    { space: 'small', px: '8' , rem: '0.5rem' },
    { space: 'medium', px: '16', rem: '1rem' },
    { space: 'large', px: '20', rem:  '1.25rem'},
    { space: 'xlarge', px: '32', rem:  '2rem' },
    { space: 'xxlarge', px: '40', rem: '2.5rem' },
    { space: 'xxxlarge', px: '60', rem: '3.75rem' }]

const tableRows = spaces.map((t) => {

  let divStyle = {
    backgroundColor: '#FD5AC9',
    width: `${t.px}px`,
    height: `${t.px}px`,
    opacity: 0.5,
    textAlign: 'center',
    color: '#fff'
  }
  return(
    <TableRow>
      <TableDataCell><div style={divStyle}></div></TableDataCell>
      <TableDataCell>{t.px}px</TableDataCell>
      <TableDataCell>{t.rem}</TableDataCell>
      <TableDataCell><Code>{t.space}</Code></TableDataCell>
    </TableRow>
  )
});

  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell widTableHeaderCell="15%"><Span size="6" weight="semi-bold" mode="subdued">SIZE</Span></TableHeaderCell>
        <TableHeaderCell><Span size="6" weight="semi-bold" mode="subdued">PX VALUE</Span></TableHeaderCell>
        <TableHeaderCell> <Span size="6" weight="semi-bold" mode="subdued">REM VALUE</Span></TableHeaderCell>
        <TableHeaderCell><Span size="6" weight="semi-bold" mode="subdued">LENS REFERENCE</Span></TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {tableRows}
    </TableBody>

  </Table>
```


