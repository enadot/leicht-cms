import {CaseIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'project',
  title: 'Projects Gallery',
  icon: CaseIcon,
  type: 'document',
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
    {
      name: 'title',
      title: 'Title',
      description: 'Enter name for the project',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designer',
      type: 'reference',
      to: [{type: 'designer'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'architect',
      description: 'If applies, enter the involved architect here (optional)',
      type: 'autocomplete',
      options: {
        autocompleteFieldPath: 'architect',
        disableNew: false,
      },
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
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Enter the project blurb along with the images here',
      type: 'singleProjectBuilder',
      validation: (Rule) => Rule.required(),
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
