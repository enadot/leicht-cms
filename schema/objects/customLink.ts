import {defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'
import {LinkIcon} from '@sanity/icons'

export const customLink = defineType({
  name: 'customLink',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'customLink',
      icon: LinkIcon,
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'isHomepage',
          type: 'boolean',
          title: '🏠 Link to homepage?',
          hidden: ({parent, value}) => (!value && !!parent?.internal) || !!parent?.external,
        },
        {
          name: 'external',
          type: 'url',
          title: 'External Link',
          description: 'https://www.example.com',
          hidden: ({parent, value}) => (!value && !!parent?.internal) || !!parent?.isHomepage,
        },
        {
          name: 'internal',
          title: 'Internal Link',
          type: 'reference',
          to: [{type: 'page'}, {type: 'post'}, {type: 'home'}],
          hidden: ({parent, value}) => (!value && !!parent?.external) || !!parent?.isHomepage,
        },
      ],
    },
  ],
  icon: ComponentIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || ComponentIcon,
      }
    },
  },
})
