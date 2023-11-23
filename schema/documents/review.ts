import {StarIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'review',
  title: 'Reviews',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'source',
      type: 'string',
      initialValue: 'Google',
      options: {
        layout: 'radio',
        list: [
          {title: 'Google', value: 'google'},
          {title: 'Houzz', value: 'houzz'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Yelp', value: 'yelp'},
        ],
      },
    }),
    {
      name: 'reviewDate',
      type: 'date',
      options: {
        dateFormat: 'MMMM DD, YYYY',
        calendarTodayLabel: 'Today',
      },
      initialValue: new Date().toISOString(),
    },
    {
      name: 'authorName',
      type: 'string',
      description: 'Enter the name of the author of this review',
    },
    {
      name: 'profilePicture',
      type: 'image',
      description: 'Upload a profile picture for this author (optional)',
    },
    {
      name: 'withImage',
      title: 'Add a featured Image?',
      type: 'boolean',
      description: 'Check this box if you want to add a featured image to this review',
      initialValue: false,
    },
    {
      name: 'featuredImage',
      description: 'Upload a featured image for this review.',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => !document.withImage, // Hide if withImage is not true
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Copy & Paste the review content here:',
    },
  ],

  preview: {
    select: {
      title: 'authorName',
      author: 'author.name',
      media: 'profilePicture',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
