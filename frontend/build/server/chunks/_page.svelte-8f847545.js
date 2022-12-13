import { c as create_ssr_component, b as each, e as escape } from './index-33a65ae9.js';

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
//# sourceMappingURL=_page.svelte-8f847545.js.map
