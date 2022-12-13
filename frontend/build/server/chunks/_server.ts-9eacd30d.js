import { r as redirect } from './index2-bca36a50.js';

const DefaultUser = {};
const POST = ({ locals }) => {
  locals.pb.authStore.clear();
  locals.user = DefaultUser;
  throw redirect(303, "/");
};

export { POST };
//# sourceMappingURL=_server.ts-9eacd30d.js.map
