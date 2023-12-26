import {TagIcon} from '@sanity/icons'
import {defineField} from 'sanity'
export default {
  name: 'interiorValues',
  title: 'Interior Values',
  icon: TagIcon,
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
    {
      name: 'title',
      title: 'Title',
      group: 'seo',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
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
      group: 'media',
    },
    {
      name: 'secondImage',
      title: 'Second image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
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
      name: 'meta_tags',
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
