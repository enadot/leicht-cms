import {CaseIcon} from '@sanity/icons'
export default {
  name: 'project',
  title: 'Projects Gallery',
  icon: CaseIcon,
  type: 'document',
  fields: [
    {
      name: 'featured',
      title: 'Featured?',
      description: `Enable if you'd like to feature this project on the homepage`,
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Enter name for the project',
      type: 'string',
      validation: (rule) => rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      description: 'Click on "Generate" (Alternatively, write down your own)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
