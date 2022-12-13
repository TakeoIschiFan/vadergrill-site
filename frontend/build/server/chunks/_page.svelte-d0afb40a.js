import { c as create_ssr_component, d as each, e as escape } from './index-8b3732e3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"maxwidth mx-auto"}">${each(data.woordenboek.items, (woord) => {
    return `<div class="${"flex flex-row gap-8"}"><p>${escape(woord.woord)}</p>
            <p>${escape(woord.beschrijving)}</p>
        </div>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d0afb40a.js.map
