import { s as serializeNonPOJO } from './utils-9b36071e.js';
import 'zod-form-data';

async function load({ locals, params }) {
  const acts = serializeNonPOJO(await locals.pb.collection("activiteiten").getList(1, 10, { sort: "-start" }));
  console.log(acts);
  return {
    activiteiten: acts
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-6d318536.js')).default;
const file = '_app/immutable/components/pages/activiteiten/_page.svelte-061a78f7.js';
const imports = ["_app/immutable/components/pages/activiteiten/_page.svelte-061a78f7.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-cacda0bd.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=3-72b3a1e7.js.map
