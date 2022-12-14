import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from './index-8b3732e3.js';

const css = {
  code: ".activiteit.svelte-upklwv{background-color:rgb(13, 17, 23)}.activiteit.svelte-upklwv:hover{background-color:rgb(90, 1, 1);transition:400ms;transform:scale(1.03)}.aankomende.svelte-upklwv{min-height:50vh}.datesvg.svelte-upklwv{color:white}",
  map: null
};
function isPast(date) {
  const today = new Date();
  let actdate = new Date(date);
  return actdate < today;
}
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
  if ($$props.isPast === void 0 && $$bindings.isPast && isPast !== void 0)
    $$bindings.isPast(isPast);
  if ($$props.isTodayorFuture === void 0 && $$bindings.isTodayorFuture && isTodayorFuture !== void 0)
    $$bindings.isTodayorFuture(isTodayorFuture);
  $$result.css.add(css);
  return `<div class="${"maxwidth content-center min-h-screen"}">
  <div class="${"flex flex-col gap-2 items-center mt-4"}"><h2 class="${"text-2xl font-bold text-center"}">Aankomende Activiteiten
  </h2>
  <div class="${"h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700"}"></div></div>
  <div class="${"block aankomende svelte-upklwv"}">${each(data.activiteiten.items, (act) => {
    return `${isTodayorFuture(act.start.slice(0, 10)) ? `<a${add_attribute("href", "/activiteiten/" + act.slug, 0)}><div class="${"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-auto px-4 py-3 align-middle gap-8 rounded-xl activiteit svelte-upklwv"}"><div><p>${escape(act.titel)}</p></div>
          <div class="${"flex gap-2"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"datesvg svelte-upklwv"}"><path d="${"m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path></svg>
            <p>${escape(act.start.slice(8, 10))}
              ${escape(maanden[act.start.slice(5, 7) - 1])}
              ${escape(act.start.slice(0, 4))}
            </p></div>
          <div class="${"flex gap-2 max-w-xs"}"><svg width="${"24px"}" height="${"24px"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 300.988 300.988"}" style="${"enable-background:new 0 0 300.988 300.988;"}" xml:space="${"preserve"}" class="${"clocksvg"}"><g><g><path d="${"M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493\n			S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001\n			s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"}" fill="${"currentcolor"}"></path><polygon points="${"142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"}" fill="${"currentcolor"}"></polygon></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            <p>${escape(act.start.slice(11, 16))}</p>
          </div></div>
      </a>` : ``}`;
  })}</div>
  
  <div class="${"flex flex-col gap-2 items-center mt-4"}"><h2 class="${"text-2xl font-bold text-center"}">Voorbije Activiteiten
    </h2>
    <div class="${"h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700"}"></div></div>
  <div class="${"grid md:grid-cols-2 sm:grid-cols-1 gap-2"}">${each(data.activiteiten.items, (act) => {
    return `${isPast(act.start.slice(0, 10)) ? `<a${add_attribute("href", "/activiteiten/" + act.slug, 0)}><div class="${"grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-4 mx-auto px-4 py-3 align-middle gap-8 rounded-xl activiteit svelte-upklwv"}"><div><p>${escape(act.titel)}</p></div>
          <div class="${"flex gap-2"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"datesvg svelte-upklwv"}"><path d="${"m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path></svg>
            <p>${escape(act.start.slice(8, 10))}
              ${escape(maanden[act.start.slice(5, 7) - 1])}
              ${escape(act.start.slice(0, 4))}</p>
          </div></div>
      </a>` : ``}`;
  })}</div></div>

`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9a51b0ff.js.map
