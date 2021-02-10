import React from 'react';
import _ from 'lodash';
import { graphql } from 'gatsby';

import { Layout } from '../components/index';
import { toStyleObj, withPrefix, htmlToReact } from '../utils';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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

export default class Page extends React.Component {
  render() {
    const images = _.get(this.props, 'pageContext.frontmatter.images', null);
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
              {images?.length && (
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  centeredSlides
                  pagination={{ clickable: true }}
                >
                  {images.map(({ image }) => (
                    <SwiperSlide>
                      <img
                        style={{
                          width: '100%',
                          height: 500,
                          objectFit: 'contain',
                        }}
                        loading="lazy"
                        src={image}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {htmlToReact(_.get(this.props, 'pageContext.html', null))}
            </div>
          </div>
        </article>
      </Layout>
    );
  }
}
