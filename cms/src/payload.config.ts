import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Evenements from './collections/Evenement';
import Media from "./collections/Media";
import Tickets from './collections/Ticket';


export default buildConfig({
  serverURL: 'http://localhost:3000',
  telemetry: false,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples,
    Evenements,
    Media,
    Tickets
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
