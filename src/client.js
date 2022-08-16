import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_ID_PROJECT,
    dataset: 'production',
    apiVersion: '2022-08-14',
    useCdn: true,
    token: process.env.REACT_APP_TOKEN_SANITY
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);