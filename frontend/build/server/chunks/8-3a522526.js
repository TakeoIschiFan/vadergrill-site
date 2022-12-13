import { s as serializeNonPOJO } from './utils-9b36071e.js';
import 'zod-form-data';

async function load({ locals, params }) {
  const woorden = serializeNonPOJO(await locals.pb.collection("woordenboek").getList(1, 50, {
    sort: "-woord"
  }));
  console.log(woorden);
  return {
    woordenboek: woorden
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
const component = async () => (await import('./_page.svelte-8f847545.js')).default;
const file = '_app/immutable/components/pages/woordenboek/_page.svelte-172f0b72.js';
const imports = ["_app/immutable/components/pages/woordenboek/_page.svelte-172f0b72.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = [];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=8-3a522526.js.map
