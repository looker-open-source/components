{
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
  ]
}
