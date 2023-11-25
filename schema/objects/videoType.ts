import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'
export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  icon: PlayIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || PlayIcon,
      }
    },
  },
})
