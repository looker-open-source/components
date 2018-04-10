# Buttons

```js
const grid = require('./button-modes').grid;
grid(['ghost', 'scary'], ['small', 'large']);
```

```js

let inputVal = '';
let changer = function(event) {
  inputVal = event.target.value
};

<div>
  <input name="foo" onChange={changer} />
  <Button mode={inputVal}>Hello World</Button>
  <Button mode="ghost">Hello World</Button>
  <Button mode="scary">Hello World</Button>
</div>
```
