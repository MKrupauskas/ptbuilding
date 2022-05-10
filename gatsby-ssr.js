/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const withPrefix = require('./src/utils/withPrefix').default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([
    <meta
      name="facebook-domain-verification"
      content="3la6ahcjbqsnt7gltzh1e0mqkvi7u8"
    />,
  ]);

  setPostBodyComponents([
    <React.Fragment>
      <script src={withPrefix('assets/js/plugins.js')} />
      <script src={withPrefix('assets/js/main.js')} />
      <script src={withPrefix('assets/js/page-load.js')} />
      <script src={withPrefix('assets/js/page-unload.js')} />
    </React.Fragment>,
  ]);
};
