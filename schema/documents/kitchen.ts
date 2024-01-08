import {defineField} from 'sanity'

export default {
  name: 'kitchen',
  title: 'Kitchens',
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
      description: 'Enter a title for this kitchen; Will be used on the hero banner image.',
      type: 'string',
      group: 'information',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'Enter the meta title for this page: used for <title> tag',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'productName',
      title: 'Product Name',
      description: 'Enter the original name of this kitchen collection by Leicht',
      type: 'autocomplete',

      options: {
        autocompleteFieldPath: 'productName',
        disableNew: false,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'firstImage',
      title: 'Image #1',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'firsttitle',
      title: 'First Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'firstparagraph',
      title: 'First Paragraph',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'secondImage',
      title: 'Image #2',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'thirdImage',
      title: 'Image #3',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'secondtitle',
      title: 'Second Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'secondparagraph',
      title: 'Second Paragraph',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'fourthImage',
      title: 'Image #4',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'fifthImage',
      title: 'Image #5',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'sixthImage',
      title: 'Image #6',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },

    {
      name: 'seventhImage',
      title: 'Image #7',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    defineField({
      name: 'tags',
      title: 'Tags / Keywords',
      type: 'array',
      group: 'seo',
      of: [{type: 'string'}],
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
