import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/data'

/** Per-page metaduomenys: title, description, canonical ir OG/Twitter žymos. */
export function Seo({ title, description }: { title: string; description: string }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const url = SITE_URL + (pathname === '/' ? '/' : pathname)

    document.title = title
    setMetaByName('title', title)
    setMetaByName('description', description)
    setCanonical(url)

    // Open Graph + Twitter (atnaujinami pagal puslapį; image/card lieka statiniai index.html)
    setMetaByProp('og:title', title)
    setMetaByProp('og:description', description)
    setMetaByProp('og:url', url)
    setMetaByProp('twitter:title', title)
    setMetaByProp('twitter:description', description)
    setMetaByProp('twitter:url', url)
  }, [title, description, pathname])

  return null
}

function setMetaByName(name: string, content: string) {
  upsertMeta('name', name, content)
}

function setMetaByProp(property: string, content: string) {
  upsertMeta('property', property, content)
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}
