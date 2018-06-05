## Mode

The `<Button />` component accepts a `mode` property which allows you to select the proper button style for the context and action the button is for.

### Primary

Use a primary button for the most frequently used action or most important action on a page. Primary buttons should only appear once on a page. They are sometimes accompanied by a secondary button.

```js
<List>
  <ListItem>
    <Button>Primary Idle</Button>
  </ListItem>
  <ListItem>
    <Button state="hover">Primary Hover</Button>
  </ListItem>
  <ListItem>
     <Button state="active">Primary Active</Button>
  </ListItem>
</List>
```

<div class="doc-section-divider"></div>

### Light
Use a light button alongside a primary button to provide alternative actions on a page. Light buttons should only appear alongside primary buttons. Use no more than two secondary buttons on a page.

```js

<List>
  <ListItem>
    <Button mode="light">Light Idle</Button>
  </ListItem>
  <ListItem>
    <Button mode="light"state="hover">Light Hover</Button>
  </ListItem>
  <ListItem>
     <Button mode="light"state="active">Light Active</Button>
  </ListItem>
</List>
```

<div class="doc-section-divider"></div>

### Ghost

Use a ghost button as a tertiary action on a screen, they are often used as a Cancel button on a form. Typically it performs the opposite action of a Light button

```js

<List>
  <ListItem>
    <Button mode="ghost">Ghost Idle</Button>
  </ListItem>
  <ListItem>
    <Button mode="ghost"state="hover">Ghost Hover</Button>
  </ListItem>
  <ListItem>
     <Button mode="ghost"state="active">Ghost Active</Button>
  </ListItem>
</List>
```

<div class="doc-section-divider"></div>

### Scary

Scary Buttons are to be used in situations where you need to convey some very important, potentially irreversible consequence of pressing this button.

```js
<List>
  <ListItem>
    <Button mode="scary">Scary Idle</Button>
  </ListItem>
  <ListItem>
    <Button mode="scary"state="hover">Scary Hover</Button>
  </ListItem>
  <ListItem>
     <Button mode="scary"state="active">Scary Active</Button>
  </ListItem>
</List>
```


## Size

Use the size property on a `<Button />` to modify the size the button rendered. You can combine it with the `mode` property to get the correct style and size of button you need.

```js
<List>
  <ListItem><Button size="large">Large Button</Button></ListItem>
  <ListItem><Button>Default Button</Button></ListItem>
  <ListItem><Button size="small">Small Light Button</Button></ListItem>
  <ListItem><Button size="xsmall">Extra-Small Scary Button</Button></ListItem>
</List>
```

## Disabled
Use a disabled button to indicate to the user what action will be possible on a page once a prerequisite action is taken. Disabled buttons do not respond to user interaction.
```js
<Button disabled>I am disabled</Button>
```

## Additional Action Considerations 
When a call to action requires additional steps, include an ellipsis at the end of the button text as a visual clue. This helps reinforce that there are aditional steps that can take place before the action takes effect.
```js
<List>
  <ListItem><Button mode="scary">Move to Trash...</Button></ListItem>
  <ListItem><Button>Print...</Button></ListItem>
</List>
```
