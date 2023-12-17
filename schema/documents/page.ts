import {File} from 'lucide-react'
import {defineField} from 'sanity'

export default {
  name: 'page',
  title: 'Pages',
  icon: File,
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'structure',
    },
    {
      name: 'content',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the page (CMS purposes only)',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'isParent',
      title: 'Is a Parent Page?',
      description: 'Enable if this page is a parent page.',
      type: 'boolean',
      initialValue: false,
      group: 'structure',
    }),
    defineField({
      name: 'parent',
      title: 'Parent Page',
      description: 'Select the parent page.',
      type: 'reference',
      to: [{type: 'page'}],
      options: {
        filter: ({document}) => {
          return {
            filter: '!defined(parent) && _id != $id',
            params: {id: document._id},
          }
        },
      },
      hidden: ({document}) => Boolean(document.isParent),
      group: 'structure',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG:Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      description: 'The <title/> of the page.',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'removeBaseTitle',
      type: 'boolean',
      title: 'Remove Base Title?',
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
      name: 'layout',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default (Empty)', value: 'default'},
          {title: 'Single Project', value: 'single_project'},
          {title: 'Gallery', value: 'gallery'},
          {title: 'Blog', value: 'blog'},
        ],
      },
    }),
    defineField({
      name: 'builder',
      title: 'Page Builder',
      type: 'pageBuilder',
      group: 'structure',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'ogImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
