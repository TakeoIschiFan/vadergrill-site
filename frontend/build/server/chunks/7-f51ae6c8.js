import { e as error, r as redirect } from './index2-bca36a50.js';

const actions = {
  register: async ({ locals, request }) => {
    const body = Object.fromEntries(await request.formData());
    console.log(body);
    try {
      await locals.pb.collection("users").create({ ...body });
    } catch (err) {
      console.log("Error: ", err);
      throw error(500, "Something went wrong");
    }
    throw redirect(303, "/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 7;
const component = async () => (await import('./_page.svelte-4d469500.js')).default;
const file = '_app/immutable/components/pages/register/_page.svelte-37db4da3.js';
const imports = ["_app/immutable/components/pages/register/_page.svelte-37db4da3.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-38adcfc9.css"];

export { component, file, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=7-f51ae6c8.js.map
