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
const component = async () => (await import('./_layout.svelte-22960ee8.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-f00e356f.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-f00e356f.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_layout-a8036053.css","_app/immutable/assets/app-e1ff4f24.css"];

export { component, file, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=0-6751f588.js.map
