import {visionTool} from '@sanity/vision'
import {theme} from 'https://themer.sanity.build/api/hues?primary=0f2027'
import {defineConfig} from 'sanity'
import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {media} from 'sanity-plugin-media'
import {deskTool} from 'sanity/desk'
import {defaultDocumentNodeResolver} from './plugins/deskStructure'
import {apiVersion, dataset, projectId} from './lib/sanity.api'
import deskStructure from './plugins/deskStructure'
import schema from './schema/schema'
import {Logo} from './plugins/logo/Logo'
import {scheduledPublishing} from '@sanity/scheduled-publishing'
import {autocompletInput} from 'sanity-plugin-autocomplete-input'

const title = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_TITLE || 'Leicht Westchester - CMS'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings'])

export default defineConfig({
  name: 'leicht-wg-cms',
  title,
  projectId,
  dataset,
  theme: theme,
  plugins: [
    deskTool({
      structure: deskStructure,
      defaultDocumentNode: defaultDocumentNodeResolver,
    }),
    media(),
    autocompletInput(),
    scheduledPublishing(),
    visionTool({defaultApiVersion: apiVersion}),
    cloudinaryAssetSourcePlugin(),
  ],

  schema: {
    types: schema,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
