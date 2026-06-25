import { useEffect } from 'react'

/** Sets the document title + meta description per page (lightweight, no deps). */
export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])

  return null
}
