/* eslint import/prefer-default-export: "off" */

/* should be replaced according to logic needs */
/* https://gist.github.com/6174/6062387 */
export const getRandomString = () => Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15);

