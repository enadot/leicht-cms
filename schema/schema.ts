import author from './singletons/author'
import blockContent from './objects/blockContent'
import category from './singletons/category'
import bathroom from './documents/bathroom'
import catalog from './documents/catalog'
import interiorValue from './documents/interiorValue'
import kitchen from './documents/kitchen'
import post from './documents/post'
import project from './documents/project'
import landingPage from './documents/landingPage'
import program from './documents/program'
import accessibleImage from './objects/accessibleImage'
import {ratingType} from './rating/ratingType'
import {brandType} from './brand/brandType'
import home from './singletons/home'
import settings from './singletons/settings'
import color from './documents/color'
import twoColumnImages from './objects/twoColumnImages'
import heroContent from './objects/heroContent'
import navItem from './objects/navItem'
import subMenuItem from './objects/subMenuItem'
import page from './documents/page'

import {heroType} from './objects/heroType'

import {imageGalleryType} from './objects/imageGallery'
import {pageType} from './pageBuilder'
import {videoType} from './objects/videoType'
import {formType} from './objects/formType'
import imageWithBlurb from './objects/imageWithBlurb'
import {SingleProjectType} from './singleProjectBuilder'
import designer from './singletons/designer'
import blockContentLinkOnly from './objects/blockContentLinkOnly'
import reviews from './documents/reviews'
import news from './documents/news'

import {customLink} from './objects/customLink'

export default [
  news,
  home,
  navItem,
  subMenuItem,
  settings,
  program,
  color,
  category,
  kitchen,
  bathroom,
  interiorValue,
  customLink,
  reviews,
  project,
  catalog,
  post,
  page,
  landingPage,
  author,
  blockContent,
  accessibleImage,
  twoColumnImages,
  ratingType,
  brandType,
  heroContent,
  heroType,
  imageGalleryType,
  pageType,
  videoType,
  formType,
  imageWithBlurb,
  SingleProjectType,
  designer,
  blockContentLinkOnly,
]
