import { serializeNonPOJO } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {

    const getActiviteit = async (slug) => {
        console.log(locals)
        try {
            const act = serializeNonPOJO(await locals.pb.collection("activiteiten").getFirstListItem(`slug="${slug}"`));
            console.log(act)
            return act;
        } catch (err) { 
            console.log(`Errorr: ${err}`);
            throw error(500, err.message);
        }
    }

    return {
        activiteit: getActiviteit(params.slug)
    };
};
