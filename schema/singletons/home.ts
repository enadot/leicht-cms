import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'media',
    },
    {
      name: 'content',
    },
  ],
  fields: [
    defineField({
      name: 'meta_title',
      title: 'Meta Title',
      description: 'Enter a meta title for this page. (Will be separated automatically)',
      type: 'object',
      fields: [
        {name: 'first', type: 'string', title: 'First'},
        {name: 'second', type: 'string', title: 'Second'},
        {name: 'third', type: 'string', title: 'Third (optional)'},
      ],
      group: 'seo',
    }),

    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      rows: 4,
      validation: (Rule) => Rule.required().max(260).warning('Maximum 260 characters recommended.'),
      description: 'Enter a brief meta description (up to 260 characters).',
    }),
    defineField({
      name: 'keywords',
      title: 'Meta keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'hero',
      title: '🎞️ Hero Slider',
      type: 'object',
      group: 'media',
      description: 'The main hero slider on the homepage.',
      fields: [
        {
          type: 'heroContent',
          name: 'hero_content',
          title: '📄 Content',
          description: 'Add here the main text displayed on the images:',
        },
        {type: 'array', name: 'hero_images', title: '📸 Images', of: [{type: 'image'}]},
      ],
    }),
    defineField({
      name: 'video',
      title: '🎥 Video Player',

      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'url', type: 'url', title: 'Video URL'},
        {name: 'cover', type: 'image', title: 'Cover Image'},
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',

      of: [{type: 'string'}],
    }),
  ],
})
