import { CollectionConfig, Field } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'Pages',
  auth: false,
  fields: [
  {
    name: "path",
    type: "text"
  } as Field,
  {
    name: "content",
    type: "text"
  } as Field
  ],
}

export default Pages
