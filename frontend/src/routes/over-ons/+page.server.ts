import { serializeNonPOJO } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export async function load({ locals, params }): PageServerLoad {

    const bestuurders = serializeNonPOJO(await locals.pb.collection("bestuur").getList(1, 11, { sort: "-important" }));
    console.log(bestuurders)

    let fotos = [];
    for (let i = 0; i < bestuurders.length; i++) {
        let x = locals.pb.getFileUrl(bestuurders, bestuurders[i].foto)
        fotos.push(x)
    }
    return {
        bestuur: bestuurders,
        bestuurfotos: fotos
    };
};
