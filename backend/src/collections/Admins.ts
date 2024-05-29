import { CollectionConfig } from 'payload/types'

export const Admins: CollectionConfig = {
  slug: 'admins',
  auth: {
    tokenExpiration: 7200,
    verify: true,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000
  },
  fields: [
  ],
}