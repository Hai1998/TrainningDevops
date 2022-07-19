const loremIpsum = require('lorem-ipsum');

const productsJSON = require('./products.json');
export const products = productsJSON.body;

const productDetailJSON = require('./products-detail.json');
export const productDetail = productDetailJSON.body;

/*
*
output = loremIpsum({
    count: 1                      // Number of words, sentences, or paragraphs to generate.
  , units: 'sentences'            // Generate words, sentences, or paragraphs.
  , format: 'plain'               // Plain text or html
  , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
  
});
*/
export const randomText = (count = 1, units = 'sentences') =>
  loremIpsum({ count, units });

export default {
  products,
  productDetail,
  randomText
};
