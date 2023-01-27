# no-private-dependencies

> Prevents public packages from depending on private packages.

## Rationale

If you have a public package that depends on a private package in `dependencies` or `devDependencies`, it will be automatically installed. If there is a dependency on a private pacakge, installation will fail because the private package cannot be found. This is to help protect against this happening.

There are exceptions to this rule. In some cases, packages published from a private monorepo may have dependencies within that monorepo that do not get published. This can be for things that run in private CI pipelines, etc. For these scenarios, this plugin allows you to declare `optionalDependencies` on private packages because these do not cause errors during installation. The only thing to be aware of is that these dependencies are restricted to being used within the private monorepo.
