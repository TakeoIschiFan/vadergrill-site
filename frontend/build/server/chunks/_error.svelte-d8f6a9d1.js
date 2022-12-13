import { c as create_ssr_component, e as escape } from './index-8b3732e3.js';
import { e as error } from './index2-bca36a50.js';

const css = {
  code: "#error.svelte-1uqwtjm{text-align:center;margin-bottom:60px}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = error } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  $$result.css.add(css);
  return `<div id="${"error"}" class="${"min-h-screen svelte-1uqwtjm"}"><h2>Oopsies</h2>
  <p>${escape(message)}</p>
  <p>Head back <a href="${"/"}" class="${"underline"}">Home</a></p>
</div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-d8f6a9d1.js.map
