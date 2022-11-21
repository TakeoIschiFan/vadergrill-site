import payload from 'payload'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    payl    
    return {
      post: {
        title: `Title for ${params.slug} goes here`,
        content: `Content for ${params.slug} goes here`
      }
    };
  }
  