# @looker/eslint-plugin

> Looker's custom eslint rules and configuration.

## Usage

```
npm i @looker/eslint-plugin
```

In your `eslint` config:

```
{
  "extends": [
    "plugin:@looker/recommended"
  ]
}
```

## Rules

- [`license-header`](src/licenseHeader/README.md) - Checks for a valid license header in public packages.
- [`no-private-dependencies`](src/noPrivateDependencies/README.md) - Prevents public packages from depending on private packages.
