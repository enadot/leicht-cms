import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'navigation',
      description: 'Here you can modify the main site menu navigation items',
      type: 'array',
      of: [
        {
          type: 'navItem',
        },
      ],
    }),
    defineField({
      name: 'designer',
      title: 'Designers List',
      description: 'Here you can modify the list of designers',
      type: 'array',
      of: [
        {
          type: 'designer',
        },
      ],
    }),
  ],
})
