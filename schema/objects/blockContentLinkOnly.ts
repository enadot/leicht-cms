import {LinkIcon} from '@sanity/icons'
export default {
  title: 'Block Content',
  name: 'blockContentLinkOnly',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [{title: 'Bold', value: 'strong'}],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link (External)',
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },

          {
            name: 'internalLink',
            type: 'object',
            title: 'Link (Internal)',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Page',
                to: [{type: 'page'}, {type: 'post'}],
              },
            ],
          },
        ],
      },
    },
  ],
}
