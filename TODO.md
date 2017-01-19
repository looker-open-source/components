
Todo Percentage
===
200 of 247 done (80.9%)


Building Blocks (Atoms)
===


Grid
---
Let's utilize a mobile-first approach and have mobile be the default. The rest of the classes will override eachother as they cascade, letting us give alternate styles to override mobile within our responsive breakpoints. Containers won't have gutters by default but we can add a class to the container to do auto gutters. Can also apply padding atoms to individual columns to control gutter with a bit more granularity.

* [x] Column Sizes (5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)
  * [x] Documentation
* [x] Container
  * [x] Documentation
* [x] Column Default (xs)
  * [x] Documentation
* [x] Nested columns
  * [x] Documentation
* [x] Offset Columns
  * [x] Documentation
* [x] Centered Columns
  * [x] Documentation
* [x] Container with auto gutters
  * [x] Documentation
* [x] Responsive Grid (Overriding with each grid size class)
  * [x] xs
  * [x] sm
  * [x] md
  * [x] lg
  * [x] xl
  * [x] Documentation





Typography
---
We utilize Gotham Rounded for all of our web typography. Maybe we should include a download of it for people to use while prototyping?

#### Headers and Sizing
We can provide styling for default `<h1> - <h6>`, as well as, utility classes for applying different sizes to the default elements so that we can control markup hierarchy while still applying the sizes we want visually.
* [x] h1
  * [x] Documentation
* [x] h2
  * [x] Documentation
* [x] h3
  * [x] Documentation
* [x] h4
  * [x] Documentation
* [x] h5
  * [x] Documentation
* [x] h6
  * [x] Documentation

#### Paragraph Sizing
* [x] Default
* [x] Size overrides for different breakpoints
* [x] Documentation

#### Emphasis
* [x] Regular
* [x] Strong/Bold
* [x] Em/Italic
* [x] Caps
* [x] Documentation

#### Alignment
* [x] Left
* [x] Right
* [x] Center
* [x] Justify
* [x] Documentation

#### Lists
* [x] Unordered List
  * [x] Documentation
* [x] Ordered List
  * [x] Documentation
* [x] Unstyled List
  * [x] Documentation





Colors
---
Treehouse utilized colors in various parts of our app. Most of our app is gray, so color is rather important. Stick to the color guidelines at all times.

* [x] Brand colors
  * [x] Documentation
* [x] UI colors
  * [x] Documentation
* [x] Topic colors
  * [x] Documentation
* [x] Text Colors
  * [x] Documentation
* [x] Gray Colors
  * [x] Documentation





Buttons (x-small, small, normal, large, x-large)
---
Buttons are important for submitting forms and calling out different CTAs or actions on a page.

* [x] Default
  * [x] Documentation
* [x] Primary
  * [x] Documentation
* [x] Secondary
  * [x] Documentation
* [x] Alert
  * [x] Documentation
* [x] Inverse
  * [x] Documentation
* [x] Disabled
  * [x] Documentation
* [x] Pill Labels
  * [x] Documentation
* [x] Split Buttons
  * [x] Documentation
* [ ] With Icon (left/right)
  * [ ] Documentation
* [ ] Square (Icon Only)
  * [ ] Documentation
* [ ] Circle (Icon Only)
  * [ ] Documentation






Forms
---
Forms should always live within a `<form>` element.

* [x] Labels
  * [x] Documentation
* [x] Inputs
  * [x] Documentation
* [x] Textareas
  * [x] Documentation
* [x] Selects
  * [x] Documentation
* [x] Radio Buttons
  * [x] Documentation
* [x] Checkboxes
  * [x] Documentation
* [x] Form Warnings
  * [x] Documentation
* [x] Form Errors
  * [x] Documentation
* [x] Form Success
  * [x] Documentation





Tables
---
Use them for tabular data.

* [x] Default
* [x] Rows
* [x] Columns
* [x] Cells
* [x] Documentation





Layout
---
Atomic classes that can be stacked to quickly create layouts, spacing, etc, on any given page or component. All of these have responsive prefixes, defaulting to mobile-first.

#### Margin (0, 0.5, 1, 2, 3, 4, 5, 6)
* [x] uniform
* [x] top
* [x] right
* [x] bottom
* [x] right  
* [x] left and right (x-axis)
* [x] top and bottom (y-axis)
* [x] auto
* [x] Documentation

#### Padding (0, 0.5, 1, 2, 3, 4, 5, 6)
* [x] uniform
* [x] top
* [x] right
* [x] bottom
* [x] right  
* [x] left and right (x-axis)
* [x] top and bottom (y-axis)
* [x] Documentation

#### Floats
* [x] Left
* [x] Right
* [x] None
* [x] Documentation

#### Display
* [x] Inline
* [x] Inline Block
* [x] Block
* [x] None
* [x] Documentation

#### Overflow (uniform, x, y)
* [x] Hidden
* [x] Auto
* [x] Scroll
* [x] Visible
* [x] Documentation

#### Width and Height
* [x] Max Width 100%
* [x] Width 100%
* [x] Width Auto
* [x] Height 100%
* [x] Documentation

#### Positioning
* [x] Relative
* [x] Absolute
* [x] Fixed
* [x] Static
* [x] Top
* [x] Bottom
* [x] Right
* [x] Left
* [x] Z-Index (4 different levels? 100, 200, 300, 400?)
* [x] Documentation

#### Vertical Alignment
* [x] Bottom
* [x] Middle
* [x] Top
* [x] Documentation




Flexbox Layouts
---
Flexbox is perfect for aligning items inside components. It typically isn't used for large scale layouts but for smaller parts of a page or component.

* [x] Parent
  * [x] Documentation
* [x] Child
  * [x] Documentation  




Borders
---
Border styles that can be applied to any element

* [x] Normal
  * [x] Documentation
* [x] Dark
  * [x] Documentation
* [x] Medium
  * [x] Documentation
* [x] Light
  * [x] Documentation
* [x] Removing Borders
  * [x] Documentation
* [x] Rounded Corners
  * [x] Documentation
* [x] Circles
  * [x] Documentation





Responsive
---
We will utilize a mobile-first approach and apply different responsive styles at our unique breakpoints.

#### Breakpoints
* [x] Extra Small (@screen, default mobile-first)
* [x] Small ($sm: 480px)
* [x] Medium ($md: 680px)
* [x] Large ($lg: 960px)
* [x] Extra Large ($xl: 1140px)
  * [x] Documentation

#### Prefixable Thing
* [x] Text Sizing
* [x] Text Alignment
* [x] Display
* [x] Floats
* [x] Overflow
* [x] Margin
* [x] Padding
* [x] Positioning
* [x] Position Spacing
* [x] Z-Index
* [x] Borders
* [x] Grid
* [x] Grid Offsets
* [x] Block Grid (Add when finished)
* [x] Width and Height
* [x] Vertical Alignment
* [x] Documentation




Block Grid (1 - 6)
---
Used when a layout has a variable number of alike items that need to be presented in a grid. We will only provide options for rows of block from 1 through 6 since those are most common for this type of grid layout. Default to mobile-first and can be overriden by responsive prefixes to get variable layouts between breakpoints.

* [x] With Gutters
  * [x] Documentation
* [x] Without Gutters
  * [x] Documentation





Components
===



Sass
---
Talk about variables, functions, mixins available in Leap
* [x] Variables
* [x] Functions
* [x] Mixins
* [x] Documentation


Library Sprint List
---
We are going to try and build out the library page as a proof of concept.

* [ ] Alert Banners
* [ ] Control Bar
* [ ] Welcome Banners
* [ ] Cards
* [ ] Tool Tips
* [ ] Coming soon Pills (add to buttons Atom)
* [ ] Modals
* [ ] Topic Icons


Other Components
---
Starting off by building a list of components that are found in the app. We can get more detailed as we dig into the parts and variations of each.

* [ ] Boxes (Header, Content, Footer)
* [ ] Video Player
* [ ] Main Navigation
* [ ] Avatars
* [ ] Step Lists
* [ ] Leaderboard Lists
* [ ] Quiz
* [ ] Course Stage Progress Bar
* [ ] Stage Progress Bar
* [ ] Generic Step Progress Bar
* [ ] Curriculum Step
* [ ] Tabs
* [ ] Dropdowns
* [ ] Forum Questions
* [ ] Answer Count
* [ ] Community Breadcrumbs
* [ ] Ask to Answer Lists
* [ ] Topic Filter List
* [ ] Stat Circles
* [ ] Radial Progress Bars
* [ ] Charts
* [ ] Badge Cards (On Profiles)
* [ ] Profile Modal
* [ ] Notifications Panel
* [ ] Resume Steps Panel
* [ ] Workspace Allotment Progress Bar
* [ ] Stats Group (Orgs)
* [ ] Activity Feed (Orgs)
* [ ] Plan Cards (Enrollment)
* [ ] Techdegree Selection Panel (Enrollment)
* [ ] Checkboxes with Title and Helper Text
* [ ] Comparison Table
* [ ] App Footer
