const path = require('path')
const typescriptPropsParser = require('react-docgen-typescript').withDefaultConfig(
  {
    propFilter: prop => {
      if (prop.parent == null) {
        return true
      }

      return prop.parent.fileName.indexOf('node_modules/@types/react') < 0
    },
  }
).parse

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
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  ignore: ['**/index.tsx', '**/*.test.tsx', '**/*.test.helpers.tsx'],
  pagePerSection: true,
  propsParser: typescriptPropsParser,
  exampleMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide_components/ThemeWrapper'),
  },
  require: [
    'chroma-js',
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
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('ts-loader'),
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
      },
    },
  },
  editorConfig: {
    theme: 'oceanic-next',
  },
}
