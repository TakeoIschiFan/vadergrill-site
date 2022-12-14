import { s as serializeNonPOJO, g as getCorrectFileURL } from './utils-f649dcb8.js';
import 'zod-form-data';

async function load({ locals, params }) {
  const bestuurders = serializeNonPOJO(await locals.pb.collection("bestuur").getList(1, 11, { sort: "-important" }));
  bestuurders.items.forEach((element) => {
    element["fotoUrl"] = getCorrectFileURL(locals.pb, element, element.foto);
  });
  console.log(bestuurders);
  return {
    bestuur: bestuurders
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-7a218374.js')).default;
const file = '_app/immutable/components/pages/over-ons/_page.svelte-ee61cb0b.js';
const imports = ["_app/immutable/components/pages/over-ons/_page.svelte-ee61cb0b.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-18cff725.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-eac8ef27.js.map
