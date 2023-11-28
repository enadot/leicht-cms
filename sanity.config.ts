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
import {wistiaInput} from 'sanity-plugin-wistia-input'
import {LogoLWG} from './plugins/logo/LogoLWG'

import LogoIcon from './plugins/logo/Icon'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['settings'])

export default defineConfig([
  {
    name: 'leicht-wg-cms',
    title: 'Westchester & Greenwich',
    basePath: '/wg',
    icon: LogoIcon,
    projectId,

    dataset,
    theme: theme,
    plugins: [
      deskTool({
        structure: deskStructure,
        defaultDocumentNode: defaultDocumentNodeResolver,
      }),
      media(),
      wistiaInput({
        token: '9b754b55ef7a9ac943f0973f43778b1ff7484465af3d8441016cffadc5f91af0',
      }),
      autocompletInput(),
      scheduledPublishing(),
      visionTool({defaultApiVersion: apiVersion}),
      cloudinaryAssetSourcePlugin(),
    ],
    schema: {
      types: schema,
      templates: (prev) => {
        const categoryChild = {
          id: 'category-child',
          title: 'Category: Child',
          schemaType: 'category',
          parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
          value: ({parentId}: {parentId: string}) => ({
            parent: {_type: 'reference', _ref: parentId},
          }),
        }

        const filteredTemplates = prev.filter(({schemaType}) => !singletonTypes.has(schemaType))

        return [...filteredTemplates, categoryChild]
      },
    },
    document: {
      unstable_comments: {
        enabled: true, // Comments enabled
      },
      actions: (input, context) =>
        singletonTypes.has(context.schemaType)
          ? input.filter(({action}) => action && singletonActions.has(action))
          : input,
    },
    studio: {
      components: {
        logo: LogoLWG,
      },
    },
  },
  {
    name: 'leicht-queens',
    title: 'Queens',
    basePath: '/queens',
    projectId: 'x00w71pz',
    dataset: 'production',
    theme: theme,
    icon: LogoIcon,
    plugins: [
      deskTool({
        structure: deskStructure,
        defaultDocumentNode: defaultDocumentNodeResolver,
      }),
      media(),
      wistiaInput({
        token: '9b754b55ef7a9ac943f0973f43778b1ff7484465af3d8441016cffadc5f91af0',
      }),
      autocompletInput(),
      scheduledPublishing(),
      visionTool({defaultApiVersion: apiVersion}),
      cloudinaryAssetSourcePlugin(),
    ],
    schema: {
      types: schema,
      templates: (prev) => {
        const categoryChild = {
          id: 'category-child',
          title: 'Category: Child',
          schemaType: 'category',
          parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
          value: ({parentId}: {parentId: string}) => ({
            parent: {_type: 'reference', _ref: parentId},
          }),
        }

        const filteredTemplates = prev.filter(({schemaType}) => !singletonTypes.has(schemaType))

        return [...filteredTemplates, categoryChild]
      },
    },
    document: {
      unstable_comments: {
        enabled: true, // Comments enabled
      },
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
  },
])
