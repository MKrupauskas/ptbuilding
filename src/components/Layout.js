import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix } from '../utils';
// import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.isPreview && (
          <Helmet>
            <title>
              {_.get(this.props, 'pageContext.frontmatter.title', null) &&
                _.get(this.props, 'pageContext.frontmatter.title', null) +
                  ' - '}
              {_.get(this.props, 'pageContext.site.siteMetadata.title', null)}
            </title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initialScale=1.0"
            />
            <meta
              name="description"
              content={_.get(
                this.props,
                'pageContext.frontmatter.excerpt',
                'A modern approach construction company with international experience in developing projects and incorporating innovations into construction operations.',
              )}
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"
            />
            {_.get(
              this.props,
              'pageContext.site.siteMetadata.favicon',
              null,
            ) && (
              <link
                rel="icon"
                href={withPrefix(
                  _.get(
                    this.props,
                    'pageContext.site.siteMetadata.favicon',
                    null,
                  ),
                )}
              />
            )}
            <link href="/styles/main.css" rel="stylesheet" />
            <body
              className={
                'palette-' +
                _.get(this.props, 'pageContext.site.siteMetadata.palette', null)
              }
            />
          </Helmet>
        )}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=888390718455357&ev=PageView&noscript=1"
          />
        </noscript>
        <div id="page" className="site">
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
