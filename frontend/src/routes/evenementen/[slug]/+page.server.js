import {get} from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    console.log(params)
    // this will eventually all be graphql, just placeholder code for now
    console.log(`http://localhost:3000/api/evenements?where[Slug][equals]=${params.slug}`)
    let x = await get(`evenements?where[Slug][equals]=${params.slug}`);
    return x.docs[0]
}
