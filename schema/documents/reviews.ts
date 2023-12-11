import {StarIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default {
  name: 'reviews',
  title: 'Reviews',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'render_component',
      type: 'string',

      options: {
        layout: 'radio',
        list: [
          {title: 'ReviewsSlider', value: 'ReviewsSlider'},
          {title: 'ReviewsSliderWithImage', value: 'ReviewsSliderWithImage'},
        ],
      },
    }),
    defineField({
      name: 'review_source',
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
      name: 'title',
      title: 'Name of Author',
      type: 'string',
      description: 'Enter the name of the author of this review',
    },

    {
      name: 'profile',
      description: 'Upload a profile picture for this author (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'featuredImage',
      description: 'Upload a featured image for this review (optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'title',
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
