import { CollectionConfig } from 'payload/types';

const Evenements: CollectionConfig = {
    slug: 'evenements',
    fields: [
        {
            name: 'Titel',
            type: 'text',
            admin: {
                description: "Voeg hier een titel toe voor het evenement"
            }
            
        },
        {   
            name: 'Beschrijving',
            type: 'textarea',
            admin: {
                description: "Voeg hier een titel toe voor het evenement"
            }
        },
        {
            name: "Datum",
            type: "date"
        },
        {
            name: "Banner",
            type: "relationship",
            relationTo: "media",
            hasMany: false,
            admin: {
                disabled: false,
              }
            
        }
    ],
};

export default Evenements;