import { serializeNonPOJO } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export async function load({ locals, params }): PageServerLoad {

    const woorden = serializeNonPOJO(await locals.pb.collection('woordenboek').getList(1,50, {
        sort: '-woord',
    }));
    console.log(woorden)
    return {
        woordenboek: woorden
    };
};
