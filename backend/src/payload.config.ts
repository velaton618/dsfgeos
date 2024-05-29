import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import {Admins} from './collections/Admins'
import Pages from './collections/Pages'

export default buildConfig({
  admin: {
    user: Admins.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Admins, Pages],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: [
    'http://localhost:3000'
  ],
  csrf: [
    'http://localhost:3000'
  ]
})
