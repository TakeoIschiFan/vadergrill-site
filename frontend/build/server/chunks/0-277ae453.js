const load = ({ locals }) => {
  if (locals.user) {
    return {
      user: locals.user
    };
  }
  return {
    user: void 0
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-f951ed3c.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-51d5c2cd.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-51d5c2cd.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/vadergrill-863f88d3.js"];
const stylesheets = ["_app/immutable/assets/_layout-a8036053.css","_app/immutable/assets/app-2c95866a.css"];

export { component, file, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=0-277ae453.js.map
