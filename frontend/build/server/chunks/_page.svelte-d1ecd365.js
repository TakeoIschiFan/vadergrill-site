import { c as create_ssr_component, d as add_attribute, e as escape, b as each } from './index-33a65ae9.js';

const css = {
  code: "#arrow.svelte-133j3g5.svelte-133j3g5{color:white}.backtext.svelte-133j3g5.svelte-133j3g5{font:bold;color:white;transform:translate(-30px, 0px);opacity:0%}.backlink.svelte-133j3g5:hover .backtext.svelte-133j3g5{transition:400ms ease-in-out;color:red;opacity:100%;transform:translate(0, 0px)}.backlink.svelte-133j3g5:hover #arrow.svelte-133j3g5{color:rgb(220, 38, 38);transition:400ms}.divbox.svelte-133j3g5.svelte-133j3g5{background-color:rgb(13, 17, 23);padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem}.img.svelte-133j3g5.svelte-133j3g5{transition:400ms ease}",
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
  var _a;
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
  let { actdate = data.activiteit.start.slice(8, 10) + " " + maanden[data.activiteit.start.slice(5, 7) - 1] + " " + data.activiteit.start.slice(0, 4) } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.maanden === void 0 && $$bindings.maanden && maanden !== void 0)
    $$bindings.maanden(maanden);
  if ($$props.isPast === void 0 && $$bindings.isPast && isPast !== void 0)
    $$bindings.isPast(isPast);
  if ($$props.isTodayorFuture === void 0 && $$bindings.isTodayorFuture && isTodayorFuture !== void 0)
    $$bindings.isTodayorFuture(isTodayorFuture);
  if ($$props.actdate === void 0 && $$bindings.actdate && actdate !== void 0)
    $$bindings.actdate(actdate);
  $$result.css.add(css);
  return `<div class="${"maxwidth"}">
  <div class="${"m-4"}"><a href="${"/activiteiten"}" class="${"flex items-center backlink svelte-133j3g5"}"><svg version="${"1.1"}" id="${"arrow"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 477.175 477.175"}" style="${"enable-background:new 0 0 477.175 477.175;"}" xml:space="${"preserve"}" width="${"40px"}" height="${"40px"}" class="${"svelte-133j3g5"}"><g><path d="${"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"}" fill="${"currentcolor"}"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
      <p class="${"backtext svelte-133j3g5"}">Terug</p></a></div>
  
  <div class="${"mx-auto block p-4"}">
    <div class="${"h-full w-full block"}"><span style="${"box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"}"><span style="${"box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 33.3333% 0px 0px;"}"></span>
        ${data.bannerURL.slice(-3) == "jpg" ? `<img${add_attribute("src", data.bannerURL, 0)} alt="${""}" draggable="${"false"}" class="${"absolute box-border inset-0 p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full shadow-lg md:rounded-t-lg object-cover"}">` : `<img src="${"/background.jpg"}" alt="${"bakcground"}" draggable="${"false"}" class="${"absolute box-border inset-0 p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full shadow-lg md:rounded-t-lg object-cover"}">`}</span></div>
    
    <div class="${"h-1 w-full top-0 bg-gradient-to-r from-red-600 to-red-700"}"></div>
    
    <div class="${"md:rounded-b-lg shadow-lg bg-black"}"><div class="${"grid sm:grid-cols-1 md:grid-cols-2"}"><div class="${"flex flex-col pl-4 md:pl-8 pr-4 lg:py-6"}"><h1 class="${"pb-3 md:text-center sm:text-left font-bold text-2xl lg:text-4xl"}">${escape(data.activiteit.titel)}</h1>
          <div class="${"flex flex-row-reverse md:justify-center sm:justify-start "}"><h2 class="${"pl-4 text-sm mb-1"}">${escape(data.activiteit.beschrijving)}</h2>
            <div class="${"relative h-full z-10 ml-0.5 left-0 bg-gradient-to-r from-red-600 to-red-700 rounded shadow-md"}" style="${"width: 3px;"}"></div></div></div>
        <div class="${"flex sm:flex-col-reverse md:flex-col md:pl-8 sm:pl-4 md:pr-8 sm:pr-4 pt-0 pb-4 sm:py-4 lg:py-6 flex-shrink-0"}"><div class="${"flex flex-row gap-2 md:flex-col md:justify-between sm:justify-start md:pt-3 sm:pt-0"}"><div class="${"w-6 h-6 bg-transparent"}"></div>
            <div class="${"flex gap-2"}"><svg width="${"24px"}" height="${"24px"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"datesvg"}"><path d="${"m22 2.25h-3.25v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-4.5v-1.5c-.014-.404-.344-.726-.75-.726s-.736.322-.75.725v.001 1.5h-3.25c-1.104 0-2 .895-2 1.999v17.75c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-17.75c0-1.104-.896-1.999-2-1.999zm.5 19.75c0 .276-.224.499-.499.5h-20.001c-.276 0-.5-.224-.5-.5v-17.75c.001-.276.224-.499.5-.499h3.25v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h4.5v1.5c.014.404.344.726.75.726s.736-.322.75-.725v-.001-1.5h3.25c.276 0 .499.224.499.499z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m5.25 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m10.5 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 16.5h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 12.75h3v2.25h-3z"}" fill="${"currentcolor"}"></path><path d="${"m15.75 9h3v2.25h-3z"}" fill="${"currentcolor"}"></path></svg>
              <p>${escape(actdate)}</p></div>
            <div class="${"flex gap-2 max-w-xs"}"><svg width="${"24px"}" height="${"24px"}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" x="${"0px"}" y="${"0px"}" viewBox="${"0 0 300.988 300.988"}" style="${"enable-background:new 0 0 300.988 300.988;"}" xml:space="${"preserve"}" class="${"clocksvg"}"><g><g><path d="${"M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493\n        S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001\n        s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z"}" fill="${"currentcolor"}"></path><polygon points="${"142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		"}" fill="${"currentcolor"}"></polygon></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <p>${escape(data.activiteit.start.slice(11, 16))}</p></div></div></div></div></div></div>
  
  ${isTodayorFuture(actdate) ? `<div class="${"m-4 divbox rounded-2xl svelte-133j3g5"}"><h2 class="${"my-4 text-2xl font-bold"}">Tickets</h2>
    ${((_a = data.user) == null ? void 0 : _a.lid) === true ? `<p class="${"mb-5"}">Er zijn nog ${escape(data.activiteit.max_aantal_tickets - data.activiteit.tickets.length)} van de ${escape(data.activiteit.max_aantal_tickets)} tickets beschikbaar.
      </p>
      <a href="${"/login"}" class="${"py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"}">Koop een ticket</a>` : `${data.user ? `Je bent nog geen volwaardig lid. Om tickets te kunnen kopen, moet je
      lidgeld betaald zijn. Je kan dit in orde brengen door iemand van het
      praesidium aan te spreken.` : `<p class="${"mb-4"}">Je bent niet ingelogd! Klik <a href="${"/login"}" class="${"hover:text-red-600 underline"}">hier</a> om in te loggen.
      </p>`}`}</div>` : ``}
  
  ${isPast(actdate) ? `<div class="${"m-4 divbox rounded-2xl svelte-133j3g5"}"><h2 class="${"my-4 text-2xl font-bold"}">Foto&#39;s</h2>
      <div class="${"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 m-2"}">${each(data.fotosURL, (foto) => {
    return `<div class="${"rounded-lg hover:scale-105 img svelte-133j3g5"}"><img${add_attribute("src", foto, 0)} alt="${""}" draggable="${"false"}">
        </div>`;
  })}</div></div>` : ``}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d1ecd365.js.map
