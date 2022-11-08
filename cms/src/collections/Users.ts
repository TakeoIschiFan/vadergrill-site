import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: "Betaald",
      type: "checkbox"
    },
    {
      name: "Tickets",
      type: "relationship",
      relationTo: "tickets",
      hasMany: true,
      unique: true
    }
  ],
};

export default Users;