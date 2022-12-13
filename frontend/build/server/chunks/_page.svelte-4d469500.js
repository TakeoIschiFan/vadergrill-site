import { c as create_ssr_component } from './index-8b3732e3.js';

const css = {
  code: ".loginbtn.svelte-d14zgd{transition:400ms}.loginbtn.svelte-d14zgd:hover{transform:scale(1.05)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"flex flex-col items-center h-full w-full maxwidth min-h-screen mt-4"}"><h2 class="${"mt-2 text-center text-3xl font-bold tracking-tight text-base-content"}">Word nu lid!
	</h2>
	<p class="${"text-center mt-1"}">Of <a href="${"/login"}" class="${"text-primary font-medium hover:cursor-pointer underline hover:text-red-600"}">login</a> als je al een account hebt.
	</p>
	<form action="${"?/register"}" method="${"POST"}" class="${"flex flex-col items-center space-y-2 w-full pt-4 text-center gap-2"}"><div class="${"form-control w-full max-w-md"}"><input type="${"text"}" name="${"username"}" class="${"input input-bordered w-2/3 max-w-md text-black rounded-lg p-1"}" placeholder="${"naam"}"></div>
		<div class="${"form-control w-full max-w-md"}"><input type="${"email"}" name="${"email"}" class="${"input input-bordered w-2/3 max-w-md text-black rounded-lg p-1"}" placeholder="${"e-mail@example.com"}"></div>
		<div class="${"form-control w-full max-w-md"}"><input type="${"password"}" name="${"password"}" class="${"input input-bordered w-2/3 max-w-md text-black rounded-lg p-1"}" placeholder="${"password"}"></div>
		<div class="${"form-control w-full max-w-md"}"><input type="${"password"}" name="${"passwordConfirm"}" class="${"input input-bordered w-2/3 max-w-md text-black rounded-lg p-1"}" placeholder="${"Comfirm password"}"></div>
		<div class="${"w-full max-w-md pt-2"}"><button type="${"submit"}" class="${"bg-red-600 w-36 hover:opacity-80 loginbtn rounded-lg font-bold text-xl shadow-lg p-1 svelte-d14zgd"}">Registreer</button></div></form>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4d469500.js.map
