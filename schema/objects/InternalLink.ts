export default {
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    {
      name: 'internal_page',
      type: 'object',
      fields: [
        {name: 'isHomepage', type: 'boolean', title: 'Link to homepage?', initialValue: false},
        {
          name: 'select_type',
          type: 'string',
          title: 'Select Type',

          options: {list: ['Page', 'Post', 'Kitchen', 'Project']},
          hidden: ({parent}) => parent?.isHomepage,
        },
        {
          name: 'page',
          type: 'reference',
          to: [{type: 'page'}],
          hidden: ({parent}) => parent?.select_type !== 'Page',
        },

        {
          name: 'post',
          type: 'reference',
          to: [{type: 'post'}],
          hidden: ({parent}) => parent?.select_type !== 'Post',
        },
        {
          name: 'kitchen',
          type: 'reference',
          to: [{type: 'kitchen'}],
          hidden: ({parent}) => parent?.select_type !== 'Kitchen',
        },
        {
          name: 'project',
          type: 'reference',
          to: [{type: 'project'}],
          hidden: ({parent}) => parent?.select_type !== 'Project',
        },
      ],
    },
  ],
}
