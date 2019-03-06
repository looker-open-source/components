```js noeditor
const StatusAndResources = require('../../../styleguide_components/StatusAndResources')
  .StatusAndResources
;<StatusAndResources
  status="stable"
  figmaURL="https://www.figma.com/file/Dirjx0RKbOOrLacqHq61By/Button-%26-Links?node-id=914%3A981&viewport=1741%2C951%2C1"
  githubURL="https://github.com/looker/lens/tree/master/src/components/Button"
  feedbackTitle="Button Component Feedback"
/>
```

Icon is the base component used to render an icon. To render an icon, you must
define the name property, which can be one of:

* AddCircle
* ArrowDropDown
* ArrowDropUp
* CancelCircle
* ChartBar
* ChartBubble
* ChartLine
* ChartMulti
* ChartPie
* CheckCircle
* CheckProgress
* Close
* Dashboard
* DotsHorz
* DotsVert
* DragHandle
* Edit
* ExpandMore
* ExploreCircle
* External
* Favorite
* FavoriteOutline
* File
* Filter
* Folder
* FolderShared
* Group
* Hamburger
* Home
* Info
* LiveHelp
* LookerLogo
* Mail
* Note
* Popular
* RecentActivity
* Redo
* Refresh
* RemoveCircle
* Search
* Settings
* TextFormat
* Trash
* TrashOutline
* Undo
* UnusedContent
* Warning

```js
<Icon name="Trash" />
```

By default, icons inherit the text color of the component they are embedded
within and can be sized using the `size` property:

```js
<Box color="palette.red300" bg="palette.charcoal800" p="large" width="210px" display="flex"  flexDirection="column" borderRadius="medium">
  The text in this Box is red and so is the icon.
  <Icon name="Trash" size="32px" mx="auto" />
</Box>
```

Alternatively, Icon can have its own color property, when it's appropriate to
break the relationship between a container's text color and the icon color:

```js
<Box color="palette.red300" bg="palette.charcoal800" p="large" width="210px" display="flex"  flexDirection="column" borderRadius="medium">
  The text in this Box is red, but the Icon is purple.
  <Icon color="palette.purple300" name="Trash" size="32px" mx="auto" />
</Box>
```
