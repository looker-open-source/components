# Lens Icons

Lens icons are exported as Lens compatible components. To help with generating these components, Lens icons are defined in SVG format. The corresponding components are automatically built by a build script to ensure they match Lens conventions.

# Lens Icon Directories

 * `src/icons/components`: This contains the built Lens Icon components. These are consumed by Lens components and Lens based projects.
 * `src/icons/svg`: All source SVG icon files are placed here. The build process uses the files in this directory to create Lens components.
 * `src/icons/glyphs`: The artifacts stored here are created by the build process and are dependencies for the primary icon components found in `src/icons/components`.

# Building Icons

All Lens icons should be exported as SVG and placed in the `src/icons/svg` directory. They do not need to be optimized beforehand, a build process will optimize them and convert them to Lens components.

The build process converts the SVG icon files into Lens compatible components, placing the built components into the `src/icons/components` directory. Supporting intermediate files are placed in the `src/icons/glyphs` directory.

The icon components need to be rebuilt whenever icon SVGs in `src/icons/svg` are added, removed or edited. Doing so is easy, simply run the command:

`yarn build-icons`

All built icon components and source icon SVG files should be committed to the Lens repository.

# Why Icon Components are not Compile Artifacts

It's tempting to think of icon components as simply a byproduct of the greater Lens build process. Taking that route would mean icons only exist in the Lens repository as source SVG files and are converted to icon components when Lens is packaged for distribution.

Doing so has a significant drawback, it would mean Lens components could not themselves include icon components. That means icon components must be built in a separate build process from Lens' and committed to the Lens repository. This ensures that Lens components can consume the icon components as part of their composition model.

# Failing Tests

To ensure the `src/icons/scripts` and `src/icons/components` directory do not get out of sync, a test has been created which takes a checksum of the files in `src/icons/svg` and compares it to the last checksum calculated by the icon build process. If you forget to rebuild the icon components after modifying or adding an icon SVG you may see a test error message like:

> The icon SVG checksum doesn't match the current directory. This probably means an icon was added, edited, or removed. To fix this error run `yarn build-icons` which will build the icon SVG files into proper icon components. Once the build process is finished, rerun the tests via `yarn test` to ensure everything passes.

Like the message says, fixing the test error should be as simple as running `yarn build-icons`.

