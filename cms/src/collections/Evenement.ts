import { CollectionConfig } from 'payload/types';

const Evenements: CollectionConfig = {
    slug: 'evenements',
    access: {
        read: ({ req: { user } }) => { return true },
    },
    fields: [
        {
            name: 'Titel',
            type: 'text',
            admin: {
                description: "Voeg hier een titel toe voor het evenement"
            },
            hooks: {
                beforeValidate: [(args) => {
                    const snakeCase = string => {
                        return string.replace(/\W+/g, " ")
                          .split(/ |\B(?=[A-Z])/)
                          .map(word => word.toLowerCase())
                          .join('_');
                    };
                    args.data.Slug = snakeCase(args.data.Titel)
                }]
            }
            
        },
        {
            name: "Slug",   
            type: 'text',
            admin: {
                description: "Dit is hoe de url van het evenement er gaat uitzien. (gaat updaten eens je gesaved hebt)",
                readOnly: true
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