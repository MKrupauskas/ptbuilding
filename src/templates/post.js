import React from 'react';
import _, { isArray } from 'lodash';
import moment from 'moment-strftime';
import { graphql } from 'gatsby';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Layout } from '../components/index';
import { toStyleObj, withPrefix, htmlToReact } from '../utils';

SwiperCore.use([Navigation, Pagination, A11y]);

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`;

export default class Post extends React.Component {
  render() {
    const blog = htmlToReact(_.get(this.props, 'pageContext.html', []));
    const content = [];
    const sliderIndexes = [];
    let isLastImage = false;

    for (const item of blog) {
      const isCurrentImage = item.props.children?.[0].type === 'img';

      if (!isCurrentImage || !isLastImage) {
        isLastImage = isCurrentImage;
        content.push(item);

        continue;
      }

      isLastImage = isCurrentImage;

      const last = content.length - 1;
      content[last] = [
        ...(isArray(content[last]) ? content[last] : [content[last]]),
        item,
      ];
      sliderIndexes.push(last);
    }

    return (
      <Layout {...this.props}>
        <article className="post post-full">
          <header className="post-header has-gradient outer">
            {_.get(this.props, 'pageContext.frontmatter.image', null) && (
              <div
                className="bg-img"
                style={toStyleObj(
                  "background-image: url('" +
                    withPrefix(
                      _.get(this.props, 'pageContext.frontmatter.image', null),
                    ) +
                    "')",
                )}
              />
            )}
            <div className="inner-sm">
              <div className="post-meta">
                <time
                  className="published"
                  dateTime={moment(
                    _.get(this.props, 'pageContext.frontmatter.date', null),
                  ).strftime('%Y-%m-%d %H:%M')}
                >
                  {moment(
                    _.get(this.props, 'pageContext.frontmatter.date', null),
                  ).strftime('%B %d, %Y')}
                </time>
              </div>
              <h1 className="post-title">
                {_.get(this.props, 'pageContext.frontmatter.title', null)}
              </h1>
              {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, 'pageContext.frontmatter.subtitle', null),
                  )}
                </div>
              )}
            </div>
          </header>
          <div className="inner-md outer">
            <div className="post-content">
              {content.map((item, index) => {
                if (sliderIndexes.includes(index)) {
                  return (
                    <Swiper
                      key={index}
                      style={{ paddingTop: 20, paddingBottom: 20 }}
                      slidesPerView={1}
                      navigation
                      centeredSlides
                      pagination={{ clickable: true }}
                    >
                      {item.map((image, i) => (
                        <SwiperSlide key={i}>{image}</SwiperSlide>
                      ))}
                    </Swiper>
                  );
                }

                return item;
              })}
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
