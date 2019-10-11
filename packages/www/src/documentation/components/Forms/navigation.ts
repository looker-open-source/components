import { NavigationSection } from '../../../components/Navigation'

const forms: NavigationSection = {
  title: 'Forms & Fields',
  path: 'forms',
  noLink: true,
  children: [
    {
      title: 'Button & IconButton',
      path: 'button',
    },
    {
      title: 'Form',
      path: 'form',
    },
    {
      title: 'Fieldset',
      path: 'fieldset',
    },
    {
      title: 'Fields',
      path: 'fields',
      noLink: true,
      children: [
        {
          title: 'FieldCheckbox & FieldRadio',
          path: 'checkbox',
        },
        {
          title: 'FieldColor',
          path: 'color',
        },
        {
          title: 'FieldSelect',
          path: 'select',
        },
        {
          title: 'FieldText',
          path: 'text',
        },
        {
          title: 'ValidationMessage',
          path: 'validation-message',
        },
      ],
    },
    {
      title: 'Inputs',
      path: 'inputs',
      noLink: true,
      children: [
        {
          title: 'Checkbox',
          path: 'checkbox',
        },
        {
          title: 'InputHidden',
          path: 'hidden',
        },
        {
          title: 'InputSearch',
          path: 'search',
        },
        {
          title: 'InputText',
          path: 'text',
        },
        {
          title: 'Radio',
          path: 'radio',
        },
        {
          title: 'Select',
          path: 'select',
        },
        {
          title: 'Slider',
          path: 'slider',
        },
        {
          title: 'ToggleSwitch',
          path: 'toggle-switch',
        },
      ],
    },
    {
      title: 'Label',
      path: 'label',
    },
  ],
}

export default forms
