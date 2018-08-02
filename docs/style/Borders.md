<div class="component-desc"><p>Borders help define the space and structure of the interface. </p></div>

<div class="doc-section-divider"></div>

## Borders on light backgrounds
Lens provides two border colors that are used on light backgrounds, default and dark.

### Default Border

```js noeditor
<div>
  <div>
    <div>Default</div>
    <div><Text element="code" size="6">var(--lens-border-color)</Text></div>
    <div><Text element="code" size="6">solid 1px #D8DEE5</Text></div>
  </div>
</div>
<div p="xl" style={{border: 'solid 1px var(--lens-border-color-dark)'}}>
  <div>
    <div>Dark</div>
    <div><Text element="code" size="6">var(--lens-border-color-dark)</Text></div>
    <div><Text element="code" size="6">solid 1px #B8C1CC</Text></div>
  </div>
</div>
```
<div class="doc-section-divider"></div>

## Borders on dark backgrounds

For a border or divider on a dark background use the light border color.

```js noeditor
<div>
  <div>
  <div>
    <div>On Dark</div>
    <div><Text element="code" size="6">var(--lens-border-color-on-dark)</Text></div>
    <div><Text element="code" size="6">solid 1px #627081</Text></div>
  </div>
  </div>
</div>

<div>
  <div>
  <div>
    <div>On Dark</div>
    <div><Text element="code" size="6">var(--lens-border-color-on-dark)</Text></div>
    <div><Text element="code" size="6">solid 1px #627081</Text></div>
  </div>
  </div>
</div>

```
