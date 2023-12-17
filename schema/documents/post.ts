import {CalendarIcon} from '@sanity/icons'
import {defineField} from 'sanity'
export default {
  name: 'post',
  title: 'Blog Posts',
  icon: CalendarIcon,
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
      name: 'featured',
      title: 'Featured?',
      description: `Enable if you'd like to feature this project on the homepage`,
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title',
      title: 'Project Title',
      description: `Enter the name of the project. (Will be rendered as an H1)`,
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),

    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: `Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters`,
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',

      description: `This is the meta description that will show up in Google search results. Ideally between 50 and 160 characters`,
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'seo',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail (optional)',
      description: `If you'd like to override the default thumbnail that is generated from the main image, upload a custom thumbnail here`,
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'media',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
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
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      options: {
        dateFormat: 'MMMM DD, YYYY',
        timeFormat: 'h:mm A',
      },
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
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
