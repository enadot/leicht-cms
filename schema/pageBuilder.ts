import {defineArrayMember, defineType} from 'sanity'

export const pageType = defineType({
  name: 'pageBuilder',
  type: 'array',
  title: 'Page',

  of: [
    defineArrayMember({
      name: 'hero',
      type: 'hero',
    }),

    defineArrayMember({
      name: 'gallery',
      type: 'gallery',
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
