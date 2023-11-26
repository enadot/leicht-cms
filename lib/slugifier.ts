// Look up the slug of the parent category and append it to the slug of the current document
export async function asyncSlugifier(
  input: {doc: {title: string; parent: {_ref: string}}},
  schemaType: any,
  context: any,
) {
  const {getClient} = context
  const client = getClient({apiVersion: '2023-03-01'})

  let pageSlug = input.doc.title
    .toLowerCase()
    .replace(/\s+/g, '-') // slugify the title
    .slice(0, 200)

  // Remove all non-alphanumeric characters (but keep the hyphens)
  pageSlug = pageSlug.replace(/[^A-Za-z0-9-]/g, '')

  if (input.doc.parent) {
    const query = '*[_id == $parentID]'
    const params = {parentID: input.doc.parent._ref}

    var result = await client.fetch(query, params)

    if (result.length > 0) {
      let parentSlug = result[0].slug.current
      return `${parentSlug}/${pageSlug}`
    } else {
      return pageSlug
    }
  } else {
    return pageSlug
  }
}
