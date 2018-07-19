<div class="component-desc"><p>Consistent spacing is the foundation for a well structured user interface. Lens provides a set of spacing rules that takes the guess work out of spacing UI elements.</p></div>

<div class="doc-section-divider"></div>

<section id="rules" class="doc-section">
## Spacing Values

All spacing for components align to a 8px grid, this grid allows for flexibility and consistency when designing for various screen sizes and devices. Below is the available spacing sizes as well as a visual representation of that size.
</section>

```js noeditor
  const specimen = "Open Sans is the typographic base for the tone and content of Lens’, Lookers design system"
  const spaces = [
    { space: 'xs', px: '4' , rem: '0.25rem'},
    { space: 's', px: '8' , rem: '0.5rem' },
    { space: 'm', px: '16', rem: '1rem' },
    { space: 'l', px: '20', rem:  '1.25rem'},
    { space: 'xl', px: '24', rem:  '1.5rem' },
    { space: '2xl', px: '30', rem: '1.875rem' },
    { space: '3xl', px: '36', rem: '2.25rem' },
    { space: '4xl', px: '46', rem: '2.875rem' }]



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
      <tr>
      <td><Block style={divStyle}></Block></td>
      <td>{t.px}px</td>
      <td>{t.rem}</td>
      <td><Text element="code" >{t.space}</Text></td>
    </tr>
    )
  });

  <Table>
    <TableHead>
      <tr>
        <th width="15%"><Text size="6" weight="semi-bold" element="span" mode="subdued">SIZE</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">PX VALUE</Text></th>
        <th> <Text size="6" weight="semi-bold" element="span" mode="subdued">REM VALUE</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">LENS REFERENCE</Text></th>
      </tr>
    </TableHead>
    <DataTableBody>
      {tableRows}
    </DataTableBody>

  </Table>
```


