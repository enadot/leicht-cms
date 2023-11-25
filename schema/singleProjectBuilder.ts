import {defineArrayMember, defineType} from 'sanity'

export const SingleProjectType = defineType({
  name: 'singleProjectBuilder',
  type: 'array',
  title: 'Page',

  of: [
    defineArrayMember({
      name: 'hero',
      type: 'hero',
    }),

    defineArrayMember({
      name: 'imageWithBlurb',
      type: 'imageWithBlurb',
    }),
    defineArrayMember({
      name: 'form',
      type: 'form',
    }),
    defineArrayMember({
      name: 'video',
      type: 'video',
    }),
  ],
})
