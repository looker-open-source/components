<div class="component-desc"><p>Typography sets the tone and flow of an interface’s content. Lens typography aims to create a harmonious hierarchy, maximize legibility, and present the content as clearly as possible.</p></div>

<div class="doc-section-divider"></div>

### Family

##### Open Sans

Lens’ primary font is Open Sans, a humanist sans serif typeface. It was chosen for its open and friendly appearance as well as having excellent legibility for digital applications.

```js noeditor
const specimen =
  'Open Sans is the typographic base for the tone and content of Lens’, Lookers design system'
const typeFamily = [
  { weight: 'light', value: '300' },
  { weight: 'normal', value: '300' },
  { weight: 'semiBold', value: '600' },
  { weight: 'bold', value: '700' },
]

const tableRows = typeFamily.map(t => {
  return (
    <TableRow>
      <TableDataCell>
        <Box px="small" is="span" className="prop-code">
          <Code size="xsmall">{t.weight}</Code>
        </Box>
      </TableDataCell>
      <TableDataCell>{t.value}</TableDataCell>
      <TableDataCell>
        <Text size="xlarge" weight={t.weight}>
          {specimen}
        </Text>
      </TableDataCell>
    </TableRow>
  )
})

;<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>
        <Text size="small" weight="semiBold" mode="subdued">
          LENS REFERENCE
        </Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text size="small" weight="semiBold" mode="subdued">
          WEIGHT
        </Text>
      </TableHeaderCell>
      <TableHeaderCell width="60%">
        <Text size="small" weight="semiBold" mode="subdued">
          SPECIMEN
        </Text>
      </TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>{tableRows}</TableBody>
</Table>
```

<div class="doc-section-divider"></div>

### Type scale

The Lens type scale is designed to provide consistent and harmonious typographic styles.

```js noeditor
const specimen = 'Lens is great'
const typeRamp = [
  { size: 'xxxxlarge', px: '46px', lh: '64px' },
  { size: 'xxxlarge', px: '36px', lh: '52px' },
  { size: 'xxxlarge', px: '25px', lh: '40px' },
  { size: 'xlarge', px: '22px', lh: '32px' },
  { size: 'large', px: '18px', lh: '28px' },
  { size: 'medium', px: '16px', lh: '24px' },
  { size: 'small', px: '14px', lh: '20px' },
  { size: 'xsmall', px: '12px', lh: '16px' },
  { size: 'xxsmall', px: '11px', lh: '16px' },
]

const tableRows = typeRamp.map(t => {
  return (
    <TableRow>
      <TableDataCell>
        <Text size={t.size}>{specimen}</Text>
      </TableDataCell>
      <TableDataCell>{t.px}</TableDataCell>
      <TableDataCell>{t.lh}</TableDataCell>
      <TableDataCell>
        <Box px="small" is="span" className="prop-code">
          <Code size="xsmall">{t.size}</Code>
        </Box>
      </TableDataCell>
    </TableRow>
  )
})

;<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>
        <Text size="xsmall" weight="semiBold" element="span" mode="subdued">
          SPECIMEN
        </Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text size="xsmall" weight="semiBold" element="span" mode="subdued">
          FONT-SIZE
        </Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text size="xsmall" weight="semiBold" element="span" mode="subdued">
          LINE-HEIGHT
        </Text>
      </TableHeaderCell>
      <TableHeaderCell>
        <Text size="xsmall" weight="semiBold" element="span" mode="subdued">
          LENS REFERENCE
        </Text>
      </TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>{tableRows}</TableBody>
</Table>
```
