import { getCorrectFileURL, serializeNonPOJO } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {

    const getActiviteit = async (slug) => {
        console.log(locals)
        try {
            const act = serializeNonPOJO(await locals.pb.collection("activiteiten").getFirstListItem(`slug="${slug}"`));
            return act;
        } catch (err) { 
            console.log(`Errorr: ${err}`);
            throw error(500, err.message);
        }
    }

    const act = await getActiviteit(params.slug);
    const bannerURL = getCorrectFileURL(locals.pb, act, act.banner)
    
    let fotos = act.fotos;
    let fotosURL = []
    for (let i = 0; i < fotos.length; i++) {
        let x = getCorrectFileURL(locals.pb, act, act.fotos[i])
        fotosURL.push(x)
    }

    return {
        activiteit: act,
        bannerURL,
        fotosURL
    };
};