import { c as create_ssr_component, b as each, e as escape } from './index-33a65ae9.js';

const css = {
  code: "section.svelte-90un59{align-items:center;width:95%;height:-moz-fit-content;height:fit-content;padding:25px}",
  map: null
};
function isTodayorFuture(date) {
  const today = new Date();
  let actdate = new Date(date);
  return actdate >= today;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { maanden = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
  ] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.maanden === void 0 && $$bindings.maanden && maanden !== void 0)
    $$bindings.maanden(maanden);
  if ($$props.isTodayorFuture === void 0 && $$bindings.isTodayorFuture && isTodayorFuture !== void 0)
    $$bindings.isTodayorFuture(isTodayorFuture);
  $$result.css.add(css);
  return `<header class="${"mb-20"}">
  <div id="${"headerbox"}"><img src="${"vadergrill.svg"}" id="${"headerlogo"}" height="${"170px"}" width="${"170px"}" alt="${""}">
    
    <div class="${"text-center mb-20"}"><h1 class="${"text-3xl font-bold headertext"}">VADER GRILL</h1>
      <p class="${"headertext font-semibold"}">De Studentenvereniging voor mensen die houden van BBQ!
      </p>
      <p class="${"headertext font-semibold"}">Est. 2022</p></div></div>
  
  <div id="${"lint"}"><div class="${"bg-black -z-10 lint-zwart w-full"}"></div>
    <div class="${"bg-red-600 -z-20 lint-rood w-full"}"></div></div></header>


<div class="${"maxwidth"}"><div class="${"gap-1 grid grid-cols-1 lg:grid-cols-2 relative"}"><section class="${"bg-red-900 m-4 rounded-3xl text-center svelte-90un59"}"><a href="${"/over-ons"}" class="${"text-3xl font-bold underline m-4"}">Over Ons</a>
      <div class="${"p-2"}"></div>
      <p>Wij zijn een Studentenvereniging die zich inzet voor mensen die houden
        van bbq. <br> Opgericht in het jaar 2022 en nog steeds levend!
      </p>
      <h1 class="${"text-3xl font-bold underline m-4"}">Ons Verhaal</h1>
      <p>Het ontstaan van onze studentenvereniging is een mooi verhaal. Het begon
        allemaal toen we samen studeerden in de bibliotheek op de sterre. We
        hadden het over allemaal leuke studentenkringen in Gent en dat er
        momenteel toch iets ontbreekte, namelijk een kring die zich inzet voor
        mensen die houden van BBQ. Dus moesten we daar iets aan doen en een paar
        weken later werd Vader Grill officieel opgericht.
      </p></section>
    <section class="${"bg-black m-4 rounded-3xl text-center svelte-90un59"}"><a href="${"/activiteiten"}" class="${"text-3xl font-bold underline"}">Activiteiten</a>
      <div class="${"p-2"}"></div>
      ${each(data.activiteiten.items, (act) => {
    return `${isTodayorFuture(act.start.slice(0, 10)) ? `<div class="${"grid m-1 grid-cols-2"}"><p>${escape(act.titel)}</p>
            <p>${escape(act.start.slice(8, 10))}
              ${escape(maanden[act.start.slice(5, 7) - 1])}
              ${escape(act.start.slice(0, 4))}</p>
          </div>` : ``}`;
  })}</section></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3685b6a3.js.map
