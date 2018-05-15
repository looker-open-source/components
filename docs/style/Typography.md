Typography sets the tone and flow of an interface’s content. Lens typography aims to create a harmonious hierarchy, maximize legibility, and present the content as clearly as possible.


## Family

### Open Sans

Lens’ primary font is Open Sans, a humanist sans serif typeface. It was chosen for its open and friendly appearance as well as having excellent legibility for digital applications.


```js noeditor
  const specimen = "Open Sans is the typographic base for the tone and content of Lens’, Lookers design system"
  const typeFamily = [
    {weight: 'light', value: '300'},
    {weight: 'normal', value: '300'},
    {weight: 'semi-bold', value: '600'},
    {weight: 'bold', value: '700'},]

  const tableRows = typeFamily.map((t) => {
    return(
      <tr>
      <td><Text element="code">{t.weight}</Text></td>
      <td>{t.value}</td>
      <td><Text size="2" weight={t.weight}>{specimen}</Text></td>
    </tr>
    )
  });

  <DataTable>
    <DataTableHead>
      <tr>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">STYLE</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">WEIGHT</Text></th>
        <th width="60%"><Text size="6" weight="semi-bold" element="span" mode="subdued">SPECIMEN</Text></th>
      </tr>
    </DataTableHead>
    <DataTableBody>
      {tableRows}
    </DataTableBody>

  </DataTable>
```




## Typescale

The Lens typescale is designed to provide consistent and harmonious typographic styles.

```js noeditor
  const specimen = "Data analytics ❤️"
  const typeRamp = [
    {level: 'd1', px: '62px', lh: '72px' },
    {level: 'd2', px: '52px', lh: '60px' },
    {level: 'd3', px: '38px', lh: '46px' },
    {level: '1', px: '28px', lh: '36px' },
    {level: '2', px: '22px', lh: '30px' },
    {level: '3', px: '19px', lh: '27px' },
    {level: '4', px: '16px', lh: '24px' },
    {level: '5', px: '14px', lh: '24px' },
    {level: '6', px: '12px', lh: '20px' },]

  const tableRows = typeRamp.map((t) => {
    return(
      <tr>
      <td><Text size={t.level}>{specimen}</Text></td>
      <td>{t.px}</td>
      <td>{t.lh}</td>
      <td><Text element="code">{t.level}</Text></td>
    </tr>
    )
  });

  <DataTable>
    <DataTableHead>
      <tr>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">SPECIMEN</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">FONT-SIZE</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">LINE-HEIGHT</Text></th>
        <th><Text size="6" weight="semi-bold" element="span" mode="subdued">SIZE</Text></th>
      </tr>
    </DataTableHead>
    <DataTableBody>
      {tableRows}
    </DataTableBody>
  </DataTable>
```

