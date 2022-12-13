import 'zod-form-data';

const serializeNonPOJO = (object) => {
  return structuredClone(object);
};
const validateData = async (formData, schema, zfd2 = false) => {
  const body = Object.fromEntries(formData);
  if (zfd2) {
    try {
      const data = schema.parse(formData);
      return {
        formData: data,
        errors: null
      };
    } catch (err) {
      console.log("Error:", err);
      const errors = err.flatten();
      return {
        formData,
        errors
      };
    }
  } else {
    try {
      const data = schema.parse(body);
      return {
        formData: data,
        errors: null
      };
    } catch (err) {
      console.log("Error:", err);
      const errors = err.flatten();
      return {
        formData: body,
        errors
      };
    }
  }
};

export { serializeNonPOJO as s, validateData as v };
//# sourceMappingURL=utils-9b36071e.js.map
