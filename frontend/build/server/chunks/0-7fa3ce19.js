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
const component = async () => (await import('./_layout.svelte-32a97b35.js')).default;
const file = '_app/immutable/components/pages/_layout.svelte-dd81562d.js';
const imports = ["_app/immutable/components/pages/_layout.svelte-dd81562d.js","_app/immutable/chunks/index-a04286cd.js","_app/immutable/chunks/vadergrill-fab5cae0.js"];
const stylesheets = ["_app/immutable/assets/_layout-a8036053.css","_app/immutable/assets/app-2c95866a.css"];

export { component, file, imports, index, _layout_server_ts as server, stylesheets };
//# sourceMappingURL=0-7fa3ce19.js.map
