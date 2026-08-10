import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)

export const slot4BrandConfig = {
  siteName: siteIdentity.name,
  tagline: siteIdentity.tagline,
  domain: siteIdentity.domain,
  baseUrl: siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#b56e6e', surface: '#F6F4E8' }
      : productKind === 'editorial'
        ? { primary: '#b56e6e', surface: '#F6F4E8' }
        : productKind === 'directory'
          ? { primary: '#b56e6e', surface: '#F6F4E8' }
          : { primary: '#b56e6e', surface: '#F6F4E8' },
} as const
