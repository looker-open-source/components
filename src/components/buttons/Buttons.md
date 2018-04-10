# Buttons

Buttons communicate what action will occur on a page when the user interacts with them. All buttons use sentence-casing (only capitalize the first letter of the first word). Copy used within a button should be unambiguous and concise, making it clear to the user what action will occur once the button is clicked.

---

## Primary

Use a primary button for the most frequently used action or most important action on a page. Primary buttons should only appear once on a page. They are sometimes accompanied by a secondary button.

```js
<table>
  <tbody>
    <tr>
      <td>
        <Button>Primary Idle</Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button>Primary Hover</Button>
      </td>
    </tr>
    <tr>
      <td>
          <Button>Primary Active</Button>
      </td>
    </tr>
  </tbody>
</table>
```

## Light

Use a light button alongside a primary button to provide alternative actions on a page. Secondary buttons should only appear alongside primary buttons. Use no more than two secondary buttons on a page.

```js
<table>
  <tbody>
    <tr>
      <td>
        <Button mode="light">Light Idle</Button>
      </td>
    </tr>
  </tbody>
</table>
```


## Sizes

```js
<table>
  <tbody>
    <tr>
      <td><Button size="extraSmall">X-Small</Button></td>
    </tr>
    <tr>
      <td>
        <Button size="small">Small</Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="">Normal</Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="large">Large</Button>
      </td>
    </tr>
  </tbody>
</table>
```
