import {defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const location = defineType({
  name: 'location',
  type: 'object',
  title: 'Location',
  fieldsets: [
    {
      name: 'address',
      title: 'Showroom Address',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    {name: 'link', type: 'reference', to: [{type: 'page'}], title: 'Link to Page'},
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'exterior', type: 'image', title: 'Exterior Image'},
    {
      name: 'interior',
      type: 'array',
      title: 'Interior',
      of: [{type: 'image'}],
      preview: {select: {title: 'title'}},
      options: {layout: 'grid'},
    },
    {
      name: 'phone',
      type: 'string',
    },
    {
      name: 'address',
      fieldset: 'address',
      type: 'object',
      fields: [
        {
          name: 'street',
          type: 'string',
        },
        {
          name: 'city',
          type: 'string',
        },
        {
          name: 'state',
          type: 'string',
        },
        {
          name: 'zip',
          type: 'string',
        },
        {
          name: 'googleMapsLink',
          type: 'url',
        },
      ],
    },
  ],
  icon: PinIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Location',
        media: PinIcon,
      }
    },
  },
})
