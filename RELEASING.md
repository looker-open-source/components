# Releasing

## Definitions

### Semantic Versioning (SemVer)

@looker/components and its sibling packages follow [Semantic Versioning](https://semver.org/).

### Commit Message Types

We generally follow [Angular's types](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type).

- `fix`: a commit of the type fix patches a bug (this correlates with PATCH in Semantic Versioning).
- `feat`: Changes that add a new feature or capability without breaking an existing interface or behavior

If a change does NOT make a change to the build artifacts produced (fix above) you can also use one of these alternative types:

- `docs`: Documentation only changes
- `refactor`: A code change that neither fixes a bug nor adds a feature.
  - NOTE: Use this keyword only if absolutely sure that there are no changes to output - if there’s a chance of regression use `fix` or `feature` instead. Refactor keyword should be used judiciously.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
- `test`: Adding missing tests or correcting existing tests

### Release Types

#### Patch (bug fixes only)

A patch release is any minor release that only contains bug fixes or changes that don’t alter the code artifact(s) shipped in the library.

Patch release generally only include commits with a `fix` type.

#### Minor

Minor releases contain changes that add or modify features (`feat`) as well as any other commit type as long as none of the changes are "BREAKING" in nature (see [Major](#major) below)

Interfaces and components may be changed as long as the changes only constitute additions or fixes to existing behavior.

#### Major

Major releases include change(s) that removes an existing component or reduces the properties it supports. Significant changes to behavior may also merit a major release. It is generally assumed that an upgrade between major versions (`1.x` to `2.x`) will require developer intervention and downstream integration work.

## Process

Audit possible downstream impacts

- Verify bundle size has not erroneously changed
- Audit for IE11 impacts
- Audit for new dependencies
- Obtain sign-off from contributors that their code is ready for release

### Checklist

- [] Review & polish CHANGELOGs
  - [] If edits are required checkout `chore/release` branch and alter `CHANGELOG.md` files as needed.
  - [] Note updates to non-devDependencies
    - NOTE: "patch" release should NOT include dependency updates unless directly related to a `fix` within the release.
    - devDependencies aren’t relevant to consumers and don’t need to be noted
  - [] Note any new deprecations (these deprecations will go into effect in the next MAJOR release)
    - Newly added deprecations should cause a release to be treated as “Minor” instead of a “Patch” release.
  - [] Push changes to `chore/release` branch
- [] Approve `chore: Release` pull request
- [] Merge `chore: Release` pull request. During the squash-merge process rewrite the commit title to `CHANGELOG ${VERSION}` (e.g.: `CHANGELOG 1.2.9`).
  - Upon merge CI will automatically:
    - Update documentation [components.looker.com](https://components.looker.com)
    - Publish Release (https://github.com/looker-open-source/components/releases)
    - Publish packages to NPM (example: https://www.npmjs.com/package/@looker/components)
- [] Follow steps outline in “Announcement Channels” per team documentation

### Major

PRE-RELEASE: Write a document describing how to mitigate any breaking changes that are part of the release.

- [] Clearly explain each breaking change
  - Make sure to justify changes (for instance how it ties to long-term road-map, improves product quality, or simplifies developer experience)
- [] If a feature is removed and no longer available, offer possible replacement solutions.
  - Ideally this would include an automated codemod (if feasible) to allow consumers to quickly make any required adjustments.

## Backports

Changes should always land in `HEAD` (currently `main` in `looker-open-source/components repository`) sometimes those fixes are valuable to users of a previous version.

Each MINOR version should have a release branch (`release-1.1` for instance). AFTER applying a bug-fix to `HEAD` checkout the release branch you’d like to patch, `cherry-pick` the relevant commit(s) and open a Pull Request against the release branch.

NOTE: Releasing backport versions is currently a manual process. Automation TBD.
