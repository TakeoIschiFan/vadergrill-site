import { s as serializeNonPOJO } from './utils-9b36071e.js';
import { e as error } from './index2-bca36a50.js';
import 'zod-form-data';

async function load({ locals, params }) {
  const getActiviteit = async (slug) => {
    console.log(locals);
    try {
      const act2 = serializeNonPOJO(await locals.pb.collection("activiteiten").getFirstListItem(`slug="${slug}"`));
      return act2;
    } catch (err) {
      console.log(`Errorr: ${err}`);
      throw error(500, err.message);
    }
  };
  const act = await getActiviteit(params.slug);
  const bannerURL = locals.pb.getFileUrl(act, act.banner);
  let fotos = act.fotos;
  let fotosURL = [];
  for (let i = 0; i < fotos.length; i++) {
    let x = locals.pb.getFileUrl(act, act.fotos[i]);
    fotosURL.push(x);
  }
  return {
    activiteit: act,
    bannerURL,
    fotosURL
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-d1ecd365.js')).default;
const file = '_app/immutable/components/pages/activiteiten/_slug_/_page.svelte-86bc7bdc.js';
const imports = ["_app/immutable/components/pages/activiteiten/_slug_/_page.svelte-86bc7bdc.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-3c3972d5.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-3b51b893.js.map
