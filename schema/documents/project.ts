import {CaseIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'project',
  title: 'Projects Gallery',
  icon: CaseIcon,
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
  fieldsets: [
    {
      name: 'address',
      title: 'Address',
      description: 'Enter the project address details here',
    },
  ],
  fields: [
    {
      name: 'featured',
      title: 'Featured?',
      description: `Enable if you'd like to feature this project on the homepage`,
      type: 'boolean',
      initialValue: false,
    },

    defineField({
      name: 'title',
      title: 'Title',
      description: 'Enter name for the project (H1)',
      type: 'string',
      group: 'seo',
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
    {
      name: 'slug',
      title: 'Slug',
      description:
        'After updating the title, click on "Generate" (Alternatively, write down your own)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
    defineField({
      title: 'Project Type',
      name: 'projectType',
      type: 'string',
      initialValue: 'Residential',
      options: {
        layout: 'radio',
        list: [
          {title: 'Residential', value: 'residential'},
          {title: 'Commercial', value: 'Commercial'},
        ],
      },
      group: 'information',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      type: 'string',
      group: 'information',
      options: {
        layout: 'radio',
        list: [
          {title: 'Modern', value: 'modern'},
          {title: 'Traditional', value: 'traditional'},
          {title: 'Transitional', value: 'transitional'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designer',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'credits',
    }),
    defineField({
      name: 'architect',
      description: 'If applies, enter the involved architect here (optional)',
      type: 'autocomplete',
      options: {
        autocompleteFieldPath: 'architect',
        disableNew: false,
      },
      group: 'credits',
    }),
    defineField({
      name: 'photographer',
      type: 'string',
      initialValue: 'Zdravko Cota',
      group: 'credits',
    }),
    defineField({
      name: 'city',
      type: 'autocomplete',
      fieldset: 'address',
      options: {
        autocompleteFieldPath: 'city',
        disableNew: false,
      },
      validation: (Rule) => Rule.required(),
      group: 'information',
    }),
    defineField({
      name: 'state',
      type: 'autocomplete',
      fieldset: 'address',
      options: {
        autocompleteFieldPath: 'state',
        disableNew: false,
      },
      validation: (Rule) => Rule.required(),
      group: 'information',
    }),
    {
      name: 'mainImage',
      title: 'Main image (Hero)',
      description: 'Will be used on the hero section of the project page',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: 'media',
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
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'firstparagraph',
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
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'secondparagraph',
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

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
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
