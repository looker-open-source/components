# Playground

This playground is the place to construct and test new components. You can easily import components from the `looker-lens` package.

To boot this package run the following command from the monorepo root:

- `yarn workspace playground develop`

This will boot webpack and watch this folder for changes to any `.tsx` files here-in.

Note: If you're editing the components package you will probably want to run the build process for that package so you get the latest compiled version of the components. To do so run the following command in a seperate terminal:

`yarn workspace looker-lens build:es --watch`

Finally, if you're making changes to component interfaces you may also want to run progressive rebuild the Typescript declarations. You can do this (with yet another terminal) by running:

`yarn workspace looker-lens build:declaration --watch`
