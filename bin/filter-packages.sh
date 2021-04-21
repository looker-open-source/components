
names='expressions components'
sdkVersion='21.4.0'
localPackages='components components-providers icons'


for name in $names
do
  # remove filter packages
  rm -rf packages/filter-$name
  # copy over filter packages
  cp -r ../helltool/packages/filter-$name packages/
  # use version # for @looker/sdk in package.json
  sed -i "s/@looker\/sdk\": \"\*/@looker\/sdk\": \"$sdkVersion/g" packages/filter-$name/package.json
  # remove @looker/cli
  sed -i '/"@looker\/cli": "\*",/d' packages/filter-$name/package.json

  # use * for local packages in package.json
  for package in $localPackages
  do
    sed -i "s/@looker\/$package\": \".*\"/@looker\/$package\": \"\*\"/g" packages/filter-$name/package.json
  done
done

# update package.json
