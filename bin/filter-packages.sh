
names='expressions components'
sdkVersion='21.4.0'
localPackages='components components-providers components-test-utils icons'
packageAdd='"main": "lib\/cjs\/index.js",\
  "module": "lib\/index.js",\
  "types": "lib\/index.d.ts",\
  "files": [\
    "lib"\
  ],\
  "sideEffects": false,\
  "repository": {\
    "type": "git",\
    "url": "https:\/\/github.com\/looker-open-source\/components",\
    "directory": "packages\/components"\
  },'


for name in $names
do
  # remove filter packages
  rm -rf packages/filter-$name
  # copy over filter packages
  cp -r ../$SOURCE_PATH/packages/filter-$name packages/
  # use version # for @looker/sdk in package.json
  sed -i "s/@looker\/sdk\": \"\*/@looker\/sdk\": \"$sdkVersion/g" packages/filter-$name/package.json
  # update main path, add module, files, types, etc
  sed -i "s/\"main\": \"src\/index.ts\",/$packageAdd/g" packages/filter-$name/package.json
  # remove @looker/cli
  sed -i '/"@looker\/cli": "\*",/d' packages/filter-$name/package.json
  # remove scripts block
  sed -i '/"scripts": {/,/}/d' packages/filter-$name/package.json

  # use * for local packages in package.json
  for package in $localPackages
  do
    sed -i "s/@looker\/$package\": \".*\"/@looker\/$package\": \"\*\"/g" packages/filter-$name/package.json
  done
done
