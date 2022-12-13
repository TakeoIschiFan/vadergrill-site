import { serializeNonPOJO, checkProd } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export async function load({ locals, params }): PageServerLoad {

    const bestuurders = serializeNonPOJO(await locals.pb.collection("bestuur").getList(1, 11, { sort: "-important" }));

    bestuurders.items.forEach(element => {
        element["fotoUrl"] = locals.pb.getFileUrl(element, element.foto)
    });

    console.log(bestuurders)

    return {
        bestuur: bestuurders,
    };
};
