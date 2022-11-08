import { CollectionConfig } from 'payload/types';

const Tickets: CollectionConfig = {
    slug: 'tickets',
    fields: [
        {   
            name: 'Evenement',
            type: 'relationship',
            relationTo: "evenements",
            hasMany: false,
            unique: true,
        },      
    ],
};

export default Tickets;