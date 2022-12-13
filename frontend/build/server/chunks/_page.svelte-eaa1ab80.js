import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from './index-8b3732e3.js';
import PocketBase from 'pocketbase';

const css = {
  code: ".praesidiumkaart.svelte-1ukk3fk:hover{transform:scale(1.05);transition:400ms ease-in-out}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pb = new PocketBase("http://127.0.0.1:8090");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0)
    $$bindings.pb(pb);
  $$result.css.add(css);
  return `<div class="${"flex flex-col gap-2 items-center mt-4"}"><h2 class="${"text-3xl font-bold text-center"}">Praesidium</h2>
  <div class="${"h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700"}"></div></div>

<div class="${"relative top-12 mx-2 mb-20"}"><div class="${"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4"}">${each(data.bestuur.items, (lid) => {
    return `<div class="${"relative z-10 bg-black rounded-lg right-0.5 praesidiumkaart svelte-1ukk3fk"}"><div class="${"grid grid-cols-2 gap-1 h-96"}"><img${add_attribute("src", pb.getFileUrl(lid, lid.foto), 0)}${add_attribute("alt", lid.naam, 0)} draggable="${"false"}" class="${"absolute -z-10 border-none w-full h-96 rounded-lg object-cover"}">
          <div class="${"ml-5 mt-5"}"><h1 class="${"relative w-full flex text-2xl font-semibold text-white headertext"}">${escape(lid.bijnaam)}</h1>
            <h3 class="${"relative w-full flex text-m font-light text-white headertext"}">${escape(lid.functie)}</h3>
            <h2 class="${"relative w-full flex text-xl font-light text-white headertext"}">${escape(lid.naam)}</h2>
          </div></div>
      </div>`;
  })}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-eaa1ab80.js.map
