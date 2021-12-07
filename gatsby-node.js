/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const talkDetailsPage = [
  '/talks/in-mem-sub-pub-with-mufa/',
  '/talks/nestjs-the-trendy-nodejs-framework/',
  '/talks/an-arabic-version-of-javascript/',
  '/talks/enhanced-developer-experience-with-nx/',
  '/talks/solid-principles-between-theory-and-practice-in-javaScript/',
  '/talks/kubernetes-runtime-security-using-falco/',
  '/talks/functional-patterns-with-typescript/',
  '/talks/developer-friendly-apis-using-es6-proxies/',
  '/talks/lessons-learned-from-a-functional-language/'
];


const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  talkDetailsPage.forEach((talks, index) => {
    createPage({
      path: talks,
      component: path.resolve(`./src/components/DetailsPage/TalkDetailsPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: talks,
      },
    });
  });

};

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.woff2$/,
          use: [loaders.url({ limit: 0 })],
        },
      ],
    },
  });
};
