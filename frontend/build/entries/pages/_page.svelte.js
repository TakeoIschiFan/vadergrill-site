import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-3xl font-bold underline"}">Welkom bij vader grill</h1>
<p>website in opbouw</p>
<p style="${"background-image: url('vadergrill.svg');"}"></p>`;
});
export {
  Page as default
};
