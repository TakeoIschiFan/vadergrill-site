import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"auth-page"}"><div class="${"container page"}"><div class="${"row"}"><div class="${"col-md-6 offset-md-3 col-xs-12"}"><h1 class="${"text-xs-center"}">Sign In</h1>
				<p class="${"text-xs-center"}"><a href="${"/register"}">Need an account?</a></p>


				<form method="${"POST"}"><fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" name="${"email"}" type="${"email"}" required placeholder="${"Email"}"></fieldset>
					<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" name="${"password"}" type="${"password"}" required placeholder="${"Password"}"></fieldset>
					<button class="${"btn btn-lg btn-primary pull-xs-right"}" type="${"submit"}">Sign in</button></form></div></div></div></div>`;
});
export {
  Page as default
};
