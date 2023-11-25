import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'imageWithBlurb',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   title: 'HTML Tag',
    //   name: 'htmlTag',
    //   type: 'string',

    //   initialValue: 'light',
    //   options: {
    //     layout: 'radio',
    //     list: [
    //       {title: 'H2', value: 'H2'},
    //       {title: 'H3', value: 'H3'},
    //       {title: 'H4', value: 'H4'},
    //     ],
    //   },
    // }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurb',
      type: 'blockContentLinkOnly',
      description: 'Enter the text of the blurb',

      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Image With Blurb',
        media: image || ImageIcon,
      }
    },
  },
})
