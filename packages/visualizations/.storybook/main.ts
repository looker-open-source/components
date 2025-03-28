import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../**/*.stories.tsx'],
  webpackFinal: wpConfig => {
    return {
      ...wpConfig,
      module: {
        ...wpConfig.module,
        rules: [
          {
            oneOf: [
              {
                rules: [
                  ...(wpConfig.module?.rules || []),
                  {
                    test: /\.([cm]?js|[jt]sx?)$/,
                    loader: require.resolve('babel-loader'),
                    options: {
                      compact: false,
                      rootMode: 'upward',
                      targets: 'extends @looker/browserslist-config',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      resolve: {
        ...wpConfig.resolve,
        mainFields: ['src', 'browser', 'module', 'main'],
      },
    };
  },
};

export default config;
