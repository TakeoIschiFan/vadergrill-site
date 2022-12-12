import { serializeNonPOJO } from "$lib/utils";
import type { PageServerLoad } from "./$types";

export async function load({ locals, params }) : PageServerLoad{

        const acts = serializeNonPOJO(await locals.pb.collection("activiteiten").getList(1, 10, {sort: "-start"}));
        console.log(acts)
        
    
    return {
        activiteiten: acts
    };
};
