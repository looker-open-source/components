# Icon

`<Icon />` component uses the property `icon` to display the correct icon.

Icon is expected be a `ReactNode` element (most likely an SVG).

```tsx
function Basic() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Done />} />
      <Icon icon={<MaterialIcons.Favorite />} size="large" />
      <Icon icon={<MaterialIcons.Settings />} size="small" />
    </Space>
  );
}
```

## Color

`color` defaults to `currentColor` - that is, the text color of the component they are embedded within. However the developer can explicitly specify color as a prop.

```tsx
function Color() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} color="inform" />
      <Space align="center" color="critical" bg="criticalSubtle" p="u5">
        <Icon icon={<MaterialIcons.Delete />} display="inline-flex" />
        Text color is red so the Icon is as well
      </Space>
    </Space>
  );
}
```

## Size

`size` can be specified by using the size prop. By default the size will be medium.

```tsx
function Size() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="xxsmall" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="xsmall" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="small" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="medium" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="large" />
    </Space>
  );
}
```

## Accessibility

When using an `Icon` we strongly encourage specification of a `title` attribute. If an `Icon` is used without an explicitly specified `title` attribute `aria-hidden="true"` will be added to hide the icon from screen readers. The assumption will be made that other efforts have been made to give the user context.

```tsx
function Accessibility() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} title="It's a trash can" />
      <Icon icon={<MaterialIcons.DeleteOutline />} />
    </Space>
  );
}
```

## Artwork

```tsx
function Artwork() {
  return (
    <Space around>
      <Icon
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="hotpink"
            />
          </svg>
        }
        size="xxsmall"
      />
      <Icon
        icon={
          <svg>
            <rect
              width="100"
              height="100"
              fill="rgb(0,0,255)"
              strokeWidth="3"
              stroke="rgb(0,0,0)"
            />
          </svg>
        }
      />
    </Space>
  );
}
```

## Icons Inside Components

```tsx
function InsideComponents() {
  return (
    <SpaceVertical>
      <Space gap="u2">
        <Button size="large" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="large"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button iconAfter={<MaterialIcons.Refresh />}>Add</Button>
        <IconButton
          size="medium"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="small" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="small"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="xsmall" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="xsmall"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="xxsmall" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="xxsmall"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>
    </SpaceVertical>
  );
}
```

## Icons Paired With Text

```tsx
function PairedWithText() {
  return (
    <SpaceVertical>
      <Space gap="u2">
        <Heading fontSize="xxsmall">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xsmall">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="small">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="medium">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xxsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="large">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="xsmall" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="small" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="small" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="medium" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="medium" icon={<MaterialIcons.Create />} />
      </Space>

      <Space gap="u2">
        <Heading fontSize="xxxxxlarge">
          This is to compare icons size with a Heading
        </Heading>
        <Icon size="large" icon={<MaterialIcons.Create />} />
      </Space>
    </SpaceVertical>
  );
}
```

# Material Design Icons

[Styled Icons](https://styled-icons.js.org/) has a massive suite of prebuilt icons for an array of icon libraries including the Material Design collection. Within suite of components we often leverage `@styled-icons/material`, `@styled-icons/material-outlined` and `@styled-icons/material-rounded`

```tsx
import { Add } from '@styled-icons/material/Add';
import { Add } from '@styled-icons/material-outlined/Add';
import { Add } from '@styled-icons/material-rounded/Add';
```

# @looker/icons Library

The Looker Components team ships a small suite of Looker-specific icons via a NPM package - `@looker/icons`. Below you can see a complete list of the icons we ship in our package. To use one simply add the package to your project and import the apppriate icon:

```tsx
import { Pivot } from '@looker/icons';
```
