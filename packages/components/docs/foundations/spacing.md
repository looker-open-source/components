# Spacing

Consistent spacing is the foundation for a well structured user interface. We provide a set of spacing rules that takes the guess work out of spacing UI elements.

## Spacing Values

Our spacing values are based on a 4px unit, each step up in the spacing scale increases the size by 1 unit, or 4px. The steps of our spacing scale are named for the amount of spacing units they represent and follow the naming pattern `u{number * spacingUnit}`.

To calculate the size you can multiply the number of units by 4 to get the pixel value of a given step, so `u2` is `2 * 4` which is `8px` of spacing.

## Legacy Values

Previously we used t-shirt sizing for our spacing scale names. This worked decently for a small set of values, but as our system has matured we needed a more flexible naming system to allow for more values and an easier way to quickly understand what size the named mapped to.

As an example, in our legacy naming scheme `medium` represented `16px` and `large` represented `20px`, but you had to memorize that. In our new naming pattern all you need to memorize is that we use a `4px` unit of spacing and you can quickly calculate the size you are applying, so in our new pattern we have `u4` for `16px` (4 \* 4) and `u5` for `20px` (4 \* 5).

Below is a table of the legacy names mapped to our new naming pattern.
