const escapeRegExp = require('lodash/escapeRegExp')
const path = require('path')
const reactDocgenTypescript = require('react-docgen-typescript')

const includeNodeModules = modules => {
  // npm/yarn might nest modules, so don't prefix with an absolute path
  const prefix = escapeRegExp('node_modules' + path.sep)
  const alternationGroup = '(' + modules.map(escapeRegExp).join('|') + ')'
  // suffix with a path separator, or else includeNodeModules(['acorn'])
  // will match 'node_modules/acorn/index.js'
  // but also 'node_modules/acorn-jsx/index.js'
  const suffix = escapeRegExp(path.sep)
  return new RegExp(prefix + alternationGroup + suffix)
}

const typescriptPropsParser = reactDocgenTypescript.withDefaultConfig({
  propFilter: prop => {
    if (prop.parent == null) {
      return true
    }

    return prop.parent.fileName.indexOf('node_modules/@types/react') < 0
  },
}).parse

const componentSections = [
  {
    name: 'Layout',
    sectionDepth: 1,
    components: [
      'src/components/Box/**/*.tsx',
      'src/components/Flex/**/*.tsx',
      'src/components/FlexItem/**/*.tsx',
    ],
  },
  {
    name: 'Text',
    sectionDepth: 1,
    components: [
      'src/components/Heading/**/*.tsx',
      'src/components/Text/**/*.tsx',
    ],
  },
  {
    name: 'Form & Inputs',
    sectionDepth: 1,
    components: [
      'src/components/Button/**/*.tsx',
      'src/components/Form/**/*.tsx',
    ],
    ignore: ['src/components/Form/Inputs/InputSearch/InputSearchControls.tsx'],
  },
  {
    name: 'Popovers',
    sectionDepth: 1,
    components: ['src/components/Popover/*.tsx'],
    content: 'src/components/Popover/Popover.md',
  },
  {
    name: 'Tooltips',
    sectionDepth: 1,
    content: 'src/components/Tooltip/RichTooltip.md',
    components: ['src/components/Tooltip/*.tsx'],
  },
  {
    name: 'Modals: Dialog & Drawer',
    sectionDepth: 1,
    content: 'src/components/Modal/Modal.md',
    components: ['src/components/Modal/**/*.tsx'],
    ignore: [
      'src/components/Modal/ModalBackdrop.tsx',
      'src/components/Modal/ModalContainer.tsx',
      'src/components/Modal/ModalContext.tsx',
      'src/components/Modal/Modal.tsx',
      'src/components/Modal/ModalBackdrop.tsx',
      'src/components/Modal/ModalManager.tsx',
      'src/components/Modal/ModalPortal.tsx',
      'src/components/Modal/ModalSurface.tsx',
      'src/components/Modal/Dialog/DialogSurface.tsx',
      'src/components/Modal/Drawer/DrawerSurface.tsx',
    ],
  },
  {
    name: 'Menu',
    sectionDepth: 1,
    components: ['src/components/Menu/**/*.tsx'],
    ignore: [
      'src/components/Menu/MenuContext.tsx',
      'src/components/Menu/MenuItem/MenuItemButton.tsx',
      'src/components/Menu/MenuItem/MenuItemDetail.tsx',
      'src/components/Menu/MenuItem/MenuItemListDetail.tsx',
      'src/components/Menu/MenuItem/MenuItemListItem.tsx',
      'src/components/Menu/MenuSearch/MenuSearchControls.tsx',
    ],
  },
]

const contentSection = {
  name: 'Content',
  sectionDepth: 1,
  components: 'src/components/**/*.tsx',
  ignore: componentSections
    .map(section => section.components)
    .reduce((prev, curr) => {
      return prev.concat(curr)
    }, []),
}

module.exports = {
  assetsDir: 'static',
  ignore: ['**/index.tsx', '**/*.test.tsx', '**/*.test.helpers.tsx'],
  pagePerSection: true,
  propsParser: typescriptPropsParser,
  exampleMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide_components/ThemeWrapper'),
  },
  require: [
    'ts-polyfill/lib/es2017-object',
    './static/monkeypatches/mainElement',
    'react-copy-to-clipboard',
    path.join(__dirname, 'styleguide_components/ThemeProvider'),
    path.join(__dirname, '/static/css/style-guide.css'),
  ],
  sections: [
    {
      name: ' ',
      content: 'src/documentation/intro.md',
      sectionDepth: 1,
      sections: [],
    },
    {
      name: 'Working With Lens',
      sectionDepth: 1,
      sections: [
        {
          name: 'Getting Started',
          content: 'src/documentation/working_with_lens/getting_started.md',
        },
        {
          name: 'Writing Components the Lens Way',
          content:
            'src/documentation/working_with_lens/writing_lens_components.md',
        },
        {
          name: 'Integrating Lens into Helltool',
          content:
            'src/documentation/working_with_lens/integrating_lens_into_helltool.md',
        },
        {
          name: 'Code Quality and IDE Setup',
          content: 'src/documentation/working_with_lens/ide_setup.md',
        },
        {
          name: 'Design Contribution',
          content: 'src/documentation/working_with_lens/design_contribution.md',
        },
      ],
    },
    {
      name: 'Advanced',
      sectionDepth: 1,
      sections: [
        {
          name: 'Styled Components',
          content: 'src/documentation/advanced/styled_components.md',
        },
      ],
    },
    {
      name: 'Principles',
      sectionDepth: 1,
      sections: [
        {
          name: 'Accessibility',
          content: 'src/documentation/principles/accessibility.md',
        },
        {
          name: 'Support Levels',
          content: 'src/documentation/principles/support_levels.md',
        },
      ],
    },
    {
      name: 'Style',
      sectionDepth: 1,
      sections: [
        {
          name: 'Breakpoints',
          content: 'src/documentation/style/Breakpoints.md',
        },
        {
          name: 'Color',
          content: 'src/documentation/style/Color.md',
        },
        {
          name: 'Typography',
          content: 'src/documentation/style/Typography.md',
        },
        {
          name: 'Spacing',
          content: 'src/documentation/style/Spacing.md',
        },
        {
          name: 'Borders & Dividers',
          content: 'src/documentation/style/Borders.md',
        },
      ],
    },
    {
      name: 'Components',
      sectionDepth: 1,
      sections: [...componentSections, contentSection],
      ignore: [
        'src/components/Overlay/*.tsx',
        'src/components/Popover/MenuOverlay/*.tsx',
      ],
    },
    {
      name: 'Icons',
      sectionDepth: 1,
      content: 'src/icons/build/AllIcons.md',
    },
  ],
  title: 'Lens',
  webpackConfig: {
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.styleguidist.json'),
            },
          },
        },
        // `yarn build-icons` compiles icons to `.d.ts` and .jsx` files
        // in `src/icons/build`. Special-case these `.jsx` files, but
        // forbid other `.js` / `.jsx` files in favor of `.ts` / `.tsx`.
        {
          test: /\.jsx$/,
          include: path.resolve(__dirname, 'src', 'icons', 'build'),
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              babelrc: false,
              presets: [
                ['@babel/preset-env', { targets: { ie: '11' } }],
                '@babel/preset-react',
              ],
            },
          },
        },
        // styleguidist has transitive dependencies via bublé which are
        // distributed as ES2015 packages. Opt these in to babel-loader
        // so styleguidist can render in IE11.
        // c.f. https://github.com/styleguidist/react-styleguidist/pull/1327#issuecomment-483928457
        {
          test: /\.js$/,
          include: includeNodeModules([
            'acorn-jsx',
            'ansi-regex',
            'ansi-styles',
            'chalk',
            'estree-walker',
            'strip-ansi',
            'react-dev-utils',
            'regexpu-core',
            'unicode-match-property-ecmascript',
            'unicode-match-property-value-ecmascript',
          ]),
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              babelrc: false,
              presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
              // We can't know a priori which dependencies use CommonJS
              // and which use ES2015 modules. Promise Babel that no one
              // is playing mix-and-match, and ask it to guess for us.
              sourceType: 'unambiguous',
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix',
        },
      ],
    },
  },
  template: {
    favicon: 'favicon.ico',
  },
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
    maxWidth: '784px',
    color: {
      codeBase: '#f8f8f2',
      codeBackground: '#282a36',
      codeComment: ' #6272a4',
      codePunctuation: '#f8f8f2',
      codeProperty: '#ff79c6;',
      codeDeleted: '#ff79c6;',
      codeString: '#50fa7b',
      codeInserted: '#50fa7b',
      codeOperator: '#f8f8f2',
      codeKeyword: '#8be9fd',
      codeFunction: '#ceb4ff',
      codeVariable: '#f8f8f2',
    },
  },
  styles: {
    Logo: {
      logo: {
        backgroundImage: 'url(/img/lens-logo.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px',
        backgroundPosition: 'left',
        textIndent: '1.8rem',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '19px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: '#3C4345',
      },
    },
    Para: {
      para: {
        maxWidth: '42rem',
        lineHeight: '1.7',
      },
    },
    Blockquote: {
      blockquote: {
        borderLeft: '4px solid #F4F6F7',
        paddingLeft: '16px',
      },
    },
    Code: {
      code: {
        color: '#4C33AA',
        padding: '2px 4px',
        borderRadius: '4px',
        background: '#F6F6F7  ',
      },
    },
    Playground: {
      preview: {
        backgroundColor: '#F2F2F9',
        border: 'none',
        borderRadius: '6px',
      },
    },
    Typography: {
      heading1: {
        fontSize: '52px',
      },
    },
    Table: {
      tableHead: {},
      cellHeading: {
        '&:nth-child(2)': {
          width: '55%',
        },
      },
    },
    Heading: {
      heading1: {
        fontSize: '46px',
        lineHeight: '64px',
      },
      heading2: {
        fontSize: '32px',
        lineHeight: '64px',
      },
      heading3: {
        fontSize: '25px',
        lineHeight: '40px',
        fontWeight: 600,
      },
      heading4: {
        fontSize: '22px',
        lineHeight: '32px',
        margin: '40px 0 0',
        fontWeight: 600,
      },
      heading5: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 600,
      },
    },
    StyleGuide: {
      '@global body': {
        fontFamily: '"Open Sans", sans-serif',
      },
      hasSidebar: {
        paddingLeft: '300px',
      },
      sidebar: {
        width: '300px',
        background: '#F4F6F7',
        padding: '0 12px',
        paddingBottom: '60px',
      },
    },
  },
}
