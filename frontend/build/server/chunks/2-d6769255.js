import { s as serializeNonPOJO } from './utils-f649dcb8.js';
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
const component = async () => (await import('./_page.svelte-de432872.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-19e976fb.js';
const imports = ["_app/immutable/components/pages/_page.svelte-19e976fb.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/vadergrill-fab5cae0.js"];
const stylesheets = ["_app/immutable/assets/_page-7ca5da88.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=2-d6769255.js.map
