import { c as create_ssr_component, b as add_attribute, e as escape } from './index-8b3732e3.js';
import { v as vg } from './vadergrill-705e36dd.js';

const css = {
  code: "#headerdiv.svelte-1ir983{padding-left:32px;padding-right:32px}.facebook.svelte-1ir983,.instagram.svelte-1ir983{color:white;transition:300ms}.facebook.svelte-1ir983:hover{color:#4267b2;transform:scale(1.1)}.instagram.svelte-1ir983:hover{color:orange;transform:scale(1.1)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { BurgerOpen = false } = $$props;
  let { onClick = () => {
    BurgerOpen = !BurgerOpen;
  } } = $$props;
  let { data } = $$props;
  console.log(data);
  if ($$props.BurgerOpen === void 0 && $$bindings.BurgerOpen && BurgerOpen !== void 0)
    $$bindings.BurgerOpen(BurgerOpen);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<nav class="${"bg-black"}"><div class="${"mx-auto maxwidth svelte-1ir983"}" id="${"headerdiv"}"><div class="${"flex justify-between"}">
      <div class="${"relative top-1"}"><a href="${"/"}" class="${"flex items-center"}"><img${add_attribute("src", vg, 0)} class="${"h-16"}" alt="${""}">
          <span class="${"font-bold self-center text-xl whitespace-nowrap py-2 px-3 hover:text-red-600"}">Vader Grill</span></a></div>
      
      <div class="${"relative top-2 md:hidden"}"><button><svg class="${["w-12 h-12 md:hidden", BurgerOpen ? "open" : ""].join(" ").trim()}" version="${"1.1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 -110 512 750"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" enable-background="${"new 0 0 512 512"}" id="${"burger"}"><g><g><g><g><path id="${"topbun"}" d="${"m480.7,228.6h-449.2c-11.3,0-20.4-9.1-20.4-20.4v-29.7c-1.77636e-15-92.4 75.1-167.5 167.4-167.5h155.1c92.3,0 167.5,75.1 167.5,167.5v29.7c0,11.2-9.2,20.4-20.4,20.4zm-428.8-40.9h408.3v-9.3c0-69.8-56.8-126.6-126.6-126.6h-155.1c-69.8,0-126.6,56.8-126.6,126.6v9.3z"}" fill="${"currentcolor"}"></path></g><g><path id="${"botbun"}" d="${"M435.4,501H76.7c-36.2,0-65.6-29.4-65.6-65.6v-54.2c0-11.3,9.1-20.4,20.4-20.4h449.1c11.3,0,20.4,9.1,20.4,20.4v54.2      C501.1,471.6,471.6,501,435.4,501z M51.9,401.6v33.8c0,13.7,11.1,24.8,24.8,24.8h358.7c13.7,0,24.8-11.1,24.8-24.8v-33.8H51.9z"}" fill="${"currentcolor"}"></path></g><g><path id="${"middleburger"}" d="${"m31.5,334.7c-7.2,0-14.2-3.8-17.9-10.6-5.4-9.9-1.8-22.3 8.1-27.7l42-23c25.1-13.8 56.3-13.8 81.5,0 13,7.1 29.2,7.1 42.2,0l18.9-10.4c25.1-13.8 56.4-13.8 81.5,0l17.5,9.6c13,7.1 29.2,7.1 42.2,0l20.5-11.3c25.1-13.8 56.3-13.8 81.5,0l41.1,22.6c9.9,5.4 13.5,17.8 8.1,27.7-5.4,9.9-17.8,13.5-27.7,8.1l-41.1-22.5c-13-7.1-29.2-7.1-42.2,0l-20.5,11.3c-25.1,13.8-56.3,13.8-81.5,0l-17.5-9.6c-13-7.1-29.2-7.1-42.2,0l-19,10.2c-25.1,13.8-56.4,13.8-81.5,0-13-7.1-29.2-7.1-42.2,0l-42,23c-3.1,1.8-6.5,2.6-9.8,2.6z"}" fill="${"currentcolor"}"></path></g></g></g></g></svg></button></div>
      
      <div class="${"hidden md:flex md:items-center"}"><a href="${"/"}" class="${[
    "py-2 px-3 font-bold relative nav-link w-nav-link",
    "current"
  ].join(" ").trim()}" style="${"max-width"}">Home</a>
        <a href="${"/activiteiten"}" class="${[
    "py-2 px-3 font-bold relative nav-link w-nav-link",
    ""
  ].join(" ").trim()}" style="${"max-width"}">Activiteiten
        </a>
        <a href="${"/over-ons"}" class="${[
    "py-2 px-3 font-bold relative nav-link w-nav-link",
    ""
  ].join(" ").trim()}" style="${"max-width"}">Over Ons
        </a>
        ${(data == null ? void 0 : data.user) ? `<p>ingelogd als ${escape(data.user.name)}</p>
          <form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}" class="${"py-2 px-3 font-bold relative nav-link w-nav-link "}">Logout</button></form>` : `<a href="${"/login"}" class="${"py-2 px-4 m-5 relative bg-red-600 rounded hover:bg-opacity-70 font-bold"}">Login</a>`}</div></div></div>
  
  <div class="${["bg-transparent w-full h-full relative bottom-5", BurgerOpen ? "open" : ""].join(" ").trim()}" id="${"mobmenu"}"><div class="${"m-3 md:hidden text-center"}"><a href="${"/"}" class="${[
    "py-3 px-3 font-bold relative nav-link w-nav-link",
    "current"
  ].join(" ").trim()}" style="${"max-width"}">Home</a></div>
    <div class="${"m-3 md:hidden text-center"}"><a href="${"/activiteiten"}" class="${[
    "py-2 px-3 font-bold relative nav-link w-nav-link",
    ""
  ].join(" ").trim()}" style="${"max-width"}">Activiteiten
      </a></div>
    <div class="${"m-3 md:hidden text-center"}"><a href="${"/over-ons"}" class="${[
    "py-2 px-3 font-bold relative nav-link w-nav-link",
    ""
  ].join(" ").trim()}" style="${"max-width"}">Over Ons
      </a></div>
    <div class="${"m-3 md:hidden text-center"}">${(data == null ? void 0 : data.user) ? `<p>ingelogd als ${escape(data.user.name)}</p>
        <form action="${"/logout"}" method="${"POST"}"><button type="${"submit"}" class="${"py-2 px-3 font-bold relative nav-link w-nav-link "}">Logout</button></form>` : `<a href="${"/login"}" class="${"py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold"}">Login</a>`}</div></div>
  
  <div class="${"bg-red-600 mx-auto h-2"}"></div></nav>
${slots.default ? slots.default({}) : ``}


<footer><div class="${"bg-black w-full h-auto"}"><div class="${"maxwidth grid grid-cols-1 md:grid-cols-2 justify-between"}"><div class="${"flex flex-row p-4 items-center justify-center gap-4"}"><img src="${"/vadergrill.svg"}" class="${"h-16"}" alt="${""}">
        <div class="${"flex flex-col gap-2"}"><p>Vader Grill</p>
          <a href="${"/privacy"}" class="${"underline text-xs hover:text-red-600"}">Privacy Policy</a></div></div>
      <div class="${"flex flex-row items-center justify-center md:justify-start mb-8 mt-4 md:m-0 gap-4"}"><a href="${"https://www.instagram.com/vader_grill/"}"><svg class="${"w-5 h-5 instagram svelte-1ir983"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"}" opacity="${"1"}" fill="${"currentcolor"}"></path></svg></a>
        <a href="${"https://www.facebook.com/profile.php?id=100087175883410"}"><svg class="${"w-5 h-5 facebook svelte-1ir983"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"}" opacity="${"1"}" fill="${"currentcolor"}"></path></svg></a></div></div></div>
</footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-32a97b35.js.map
