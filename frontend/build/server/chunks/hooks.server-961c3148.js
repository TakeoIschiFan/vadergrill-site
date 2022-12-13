import PocketBase from 'pocketbase';
import { s as serializeNonPOJO } from './utils-9b36071e.js';
import 'zod-form-data';

const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase("http://127.0.0.1:8090");
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  if (event.locals.pb.authStore.isValid) {
    event.locals.user = serializeNonPOJO(event.locals.pb.authStore.model);
  } else {
    event.locals.user = void 0;
  }
  const response = await resolve(event);
  response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-961c3148.js.map
