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

const index = 2;
const component = async () => (await import('./_page.svelte-be3c5f9f.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-c6911989.js';
const imports = ["_app/immutable/components/pages/_page.svelte-c6911989.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/vadergrill-863f88d3.js"];
const stylesheets = ["_app/immutable/assets/_page-7ca5da88.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=2-e994dc08.js.map
