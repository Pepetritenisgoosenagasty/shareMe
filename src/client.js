import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// export const client = sanityClient({
//     projectId: 'yts2ldsk',
//    dataset: 'production',
//   apiVersion: '2021-10-21',
//     useCdn: true,
//     token: `${process.env.REACT_APP_SANITY_TOKEN}`,
//      ignoreBrowserTokenWarning: true
// })

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PRODUCT_ID,
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
  token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data,
   ignoreBrowserTokenWarning: true
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)