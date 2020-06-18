## @looker/prettier-config

To use this file add the package:

```
yarn add -D @looker/prettier-config
```

Add the config to either your `package.json`:

```json
{
  ...
  "prettier": "@looker/prettier-config"
}
```

Or add a `.prettierrc.js` file to the root of the project with the following:

```
module.exports = {
  ...require('@looker/prettier-config'),
}
```

For details on how this works visit: https://prettier.io/docs/en/configuration.html#sharing-configurations
"
