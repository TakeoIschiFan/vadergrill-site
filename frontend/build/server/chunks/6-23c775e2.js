import { s as serializeNonPOJO } from './utils-9b36071e.js';
import 'zod-form-data';

async function load({ locals, params }) {
  const bestuurders = serializeNonPOJO(await locals.pb.collection("bestuur").getList(1, 11, { sort: "-important" }));
  console.log(bestuurders);
  let fotos = [];
  for (let i = 0; i < bestuurders.length; i++) {
    let x = locals.pb.getFileUrl(bestuurders, bestuurders[i].foto);
    fotos.push(x);
  }
  return {
    bestuur: bestuurders,
    bestuurfotos: fotos
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-f26245f9.js')).default;
const file = '_app/immutable/components/pages/over-ons/_page.svelte-4ea03265.js';
const imports = ["_app/immutable/components/pages/over-ons/_page.svelte-4ea03265.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-18cff725.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-23c775e2.js.map
