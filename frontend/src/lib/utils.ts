export const serializeNonPOJO = (object: any) => {
    return structuredClone(object);
};