import 'zod-form-data';

const serializeNonPOJO = (object) => {
  return structuredClone(object);
};
const getCorrectFileURL = (pb, collection, field) => {
  let base = pb.getFileUrl(collection, field);
  {
    base = base.replace("127.0.0.1:8090/", "vadergrill.be/");
  }
  return base;
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

export { getCorrectFileURL as g, serializeNonPOJO as s, validateData as v };
//# sourceMappingURL=utils-f649dcb8.js.map
