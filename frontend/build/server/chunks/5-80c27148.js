import { z } from 'zod';
import 'zod-form-data';
import { v as validateData } from './utils-f649dcb8.js';
import { i as invalid, r as redirect } from './index2-bca36a50.js';

const loginUserDto = z.object({
  email: z.string({ required_error: "Email moet ingevuld zijn" }).email({ message: "Email moet een correcte email zijn." }),
  password: z.string({ required_error: "Wachtwoord moet ingevuld zijn" })
});
const actions = {
  login: async ({ request, locals }) => {
    var _a, _b, _c;
    const { formData, errors } = await validateData(await request.formData(), loginUserDto);
    if (errors) {
      return invalid(400, {
        data: formData,
        errors: errors.fieldErrors
      });
    }
    try {
      await locals.pb.collection("users").authWithPassword(formData.email, formData.password);
      if (!((_c = (_b = (_a = locals.pb) == null ? void 0 : _a.authStore) == null ? void 0 : _b.model) == null ? void 0 : _c.verified)) {
        locals.pb.authStore.clear();
        return {
          notVerified: true
        };
      }
    } catch (err) {
      console.log("Error: ", err);
      const { password, ...rest } = formData;
      return {
        data: rest,
        invalidCredentials: true
      };
    }
    throw redirect(303, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
const component = async () => (await import('./_page.svelte-96d4fd22.js')).default;
const file = '_app/immutable/components/pages/login/_page.svelte-73d55225.js';
const imports = ["_app/immutable/components/pages/login/_page.svelte-73d55225.js","_app/immutable/chunks/index-a04286cd.js"];
const stylesheets = ["_app/immutable/assets/_page-38adcfc9.css"];

export { component, file, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=5-80c27148.js.map
