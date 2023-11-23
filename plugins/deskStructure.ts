import {
  CogIcon,
  StackCompactIcon,
  UsersIcon,
  DocumentsIcon,
  ThListIcon,
  HomeIcon,
  CalendarIcon,
  CaseIcon,
  StarIcon,
  BookIcon as CatalogIcon,
} from '@sanity/icons'
import {DefaultDocumentNodeResolver, StructureBuilder} from 'sanity/desk'
import {SanityDocument} from 'next-sanity'

import {Iframe} from 'sanity-plugin-iframe-pane'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'https://www.leichtwestchester.com'

export const defaultDocumentNodeResolver: DefaultDocumentNodeResolver = (
  S: StructureBuilder,
  {schemaType},
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) =>
              doc?.slug?.current
                ? `${baseUrl}/api/preview?slug=${doc.slug.current}`
                : `${baseUrl}/api/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}

export default (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Homepage').icon(HomeIcon).child(S.document().schemaType('home')),
      S.divider(),
      S.listItem()
        .title('Routes')
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList('page').title('All Pages').child(S.document().schemaType('page')),
        ),

      S.divider(),
      S.listItem()
      .title('Project Gallery')
      .icon(CaseIcon)
      .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
      .title('Kitchens')
      .icon(CatalogIcon)
      .child(S.documentTypeList('kitchen').title('All Kitchens')),
     
        S.listItem()
      .title('Bathroom Vanities')
      .icon(CatalogIcon)
      .child(S.documentTypeList('bathroom').title('All Vanities')),
      S.listItem()
      .title('Interior Values')
      .icon(CatalogIcon)
      .child(S.documentTypeList('interiorValue').title('Interior Values')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'post',
            'home',
            'page',
            'color',
            'settings',
            'media.tag',
            'catalog',
            'category',
            'author',
            'finish',
            'program',
            'project',
            'kitchen',
            'bathroom',
            'interiorValue',
            'landingPage',
            'review',
          ].includes(item.getId()),
      ),
      S.listItem()
        .title('Blog Posts')
        .icon(CalendarIcon)
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Categories')
        .icon(StackCompactIcon)
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .child(S.documentTypeList('author').title('Authors').filter('_type == "author"')),
      S.divider(),
      S.listItem()
        .title('Catalogs')
        .icon(CatalogIcon)
        .child(S.documentTypeList('catalog').title('Catalogs')),

      S.divider(),
      S.listItem()
        .title('Reviews')
        .icon(StarIcon)
        .child(S.documentTypeList('review').title('Reviews')),
      S.divider(),

      S.listItem()
        .title('Finish Browser')
        .icon(ThListIcon)
        .child(
          S.list()
            .title('All Types')
            .items([
              S.documentTypeListItem('program').title('Programs'),
              S.documentTypeListItem('color').title('Colors'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
