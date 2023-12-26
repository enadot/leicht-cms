import {defineField} from 'sanity'

export default {
  name: 'bathroom',
  title: 'Bathroom Vanities',
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
      name: 'information',
    },
    {
      name: 'credits',
    },
    {
      name: 'content',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Enter a title (H1) of this page used for SEO',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'metaTitle',
      description: 'Enter the meta title for this page: used for <title> tag',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
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

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'firsttitle',
      title: 'First Title',
      type: 'string',
    },
    {
      name: 'firstparagraph',
      title: 'First Paragraph',
      type: 'text',
      rows: 10,
    },
    {
      name: 'firstImage',
      title: 'First image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondtitle',
      title: 'Second Title',
      type: 'string',
    },
    {
      name: 'secondparagraph',
      title: 'Second Paragraph',
      type: 'text',
      rows: 10,
    },

    defineField({
      name: 'tags',
      title: 'Tags / Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'strinsg'}],
      options: {
        layout: 'tags',
      },
    }),
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
