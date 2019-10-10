import { PrismTheme } from 'prism-react-renderer'
import { palette } from '@looker/design-tokens'

const theme: PrismTheme = {
  plain: {
    backgroundColor: palette.charcoal800,
    color: palette.charcoal300,
  },
  styles: [
    {
      types: ['prolog', 'doctype', 'cdata'],
      style: {
        color: palette.yellow200,
      },
    },
    {
      types: ['comment'],
      style: {
        color: palette.charcoal400,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['parameter'],
      style: {
        color: palette.red300,
      },
    },
    {
      types: ['tag'],
      style: {
        color: palette.yellow300,
      },
    },
    {
      types: ['operator', 'number', 'keyword', 'attr-name'],
      style: {
        color: palette.purple200,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: palette.blue200,
      },
    },
    {
      types: ['property', 'function', 'script'],
      style: {
        color: palette.blue400,
      },
    },
    {
      types: ['tag-id', 'selector', 'atrule-id'],
      style: {
        color: '#eeebff',
      },
    },

    {
      types: ['string', 'attr-value'],
      style: {
        color: palette.green300,
      },
    },

    {
      types: [
        'boolean',

        'entity',
        'url',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
      style: {
        color: '#ffcc99',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#c4b9fe',
      },
    },
  ],
}

export default theme
