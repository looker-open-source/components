
names='expressions components'
sdkVersion='21.4.0'


for name in $names
do
  # remove filter packages
  rm -rf packages/filter-$name
  # copy over filter packages
  cp -r ../helltool/packages/filter-$name packages/
  # update package.json
  sed -i "s/@looker\/sdk\": \"\*/@looker\/sdk\": \"$sdkVersion/g" packages/filter-$name/package.json
done

# update package.json
