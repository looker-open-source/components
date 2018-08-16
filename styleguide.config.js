const path = require('path')
const typescriptPropsParser = require('react-docgen-typescript').withDefaultConfig().parse

module.exports = {
  assetsDir: 'static',
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true
    }
  },
  ignore: [
    '**/index.tsx',
    '**/*.test.tsx'
  ],
  pagePerSection: true,
  propsParser: typescriptPropsParser,
  showCode: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide_components/ThemeWrapper')
  },
  require: [
    'chroma-js',
    path.join(__dirname, 'styleguide_components/ThemeProvider'),
    path.join(__dirname, '/static/css/style-guide.css')
  ],
  sections: [
    {
      name: 'Lens',
      content: 'docs/intro.md'
    },
    {
      name: 'Principles',
      sections: [ {
        name:'Accessibility',
        content: 'docs/principles/accessibility.md'
      }
    ]
    },
    {
      name: 'Style',
      sections: [
      {
        name: 'Color',
        content: 'docs/style/Color.md'
      },
      {
        name: 'Typography',
        content: 'docs/style/Typography.md'
      },
      {
        name: 'Spacing',
        content: 'docs/style/Spacing.md'
      },
      {
        name: 'Borders & Dividers',
        content: 'docs/style/Borders.md'
      },
    ]
    },
    {
      name: 'Components',
      components: 'src/components/**/*.tsx'
    },
    {
      name: 'Icons',
      components: 'src/icons/components/*.tsx',
      content: 'src/icons/components/ALL_ICONS.md'
    }
  ],
  title: 'Lens',
  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('ts-loader')
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /.scss$/,
          include: path.resolve(__dirname, '../'),
          use: [
            'style-loader',
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                camelCase: true,
                modules: true,
                namedExport: true,
                importLoaders: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix'
        },
      ]
    }
  },
  template: {
    favicon: 'favicon.ico'
  },
  theme: {
      fontFamily: {
      base: '"Open Sans", sans-serif'
    }
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

      }
    },
    Para: {
      para: {
        maxWidth: '765px'
      }
    },
    Code: {
      code: {
        color: '#4C33AA',
        padding: '2px 4px',
        borderRadius: '4px',
        background: '#F6F6F7  '
      }
    },
    Playground: {
        preview: {
          backgroundColor: '#F2F2F9',
          border: 'none',
          borderRadius: '6px'
      }
    },
    Typography: {
      heading1: {
        fontSize: '52px'
      }
    },
    Table: {

      tableHead: {

      },
      cellHeading: {
        '&:nth-child(2)': {
          width: '55%'
        }
      },
    },
    Heading: {
      heading1: {
        fontSize: 'var(--lens-font-size-d2)',
        lineHeight: 'var(--lens-line-height-d2)',
      },
      heading2: {
        fontSize: 'var(--lens-font-size-d3)',
        lineHeight: 'var(--lens-line-height-d3)',
        marginBottom: 'var(--lens-spacing-xl)'
      },
      heading3: {
        fontSize: 'var(--lens-font-size-2)',
        lineHeight: 'var(--lens-line-height-2)',
        fontWeight: 600
      }
    },
    StyleGuide: {
      '@global body': {
        fontFamily: '"Open Sans", sans-serif'
      },
      hasSidebar: {
        paddingLeft: '300px'
      },
      sidebar: {
        width: '300px'
      }
    }
  },
  editorConfig: {
    theme: 'oceanic-next'
  }
}
