import React from 'react';
import { SectionGrid } from '.';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'lodash';

import {
  classNames,
  htmlToReact,
  withPrefix,
  Link,
  markdownify,
} from '../utils';
import CtaButtons from './CtaButtons';

SwiperCore.use([Navigation, Pagination, A11y]);

export const SimilarProjects = ({ pages, type }) => {
  if (!pages?.length) {
    return null;
  }

  const items = pages.map((item) => {
    const path = item.fileAbsolutePath.split('/');
    const url = `/portfolio/${path[path.length - 1].split('.')[0]}`;
    return {
      title: item.frontmatter.title,
      content: item.frontmatter.subtitle,
      image: item.frontmatter.images?.[0].image,
      actions: [
        {
          style: 'link',
          label: 'Learn more',
          url,
        },
      ],
    };
  });

  return (
    <>
      <div className="block-header inner-sm">
        <h2 className="block-title">Similar {type ?? ''} projects</h2>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides
        pagination={{ clickable: true }}
        breakpoints={{ 700: { slidesPerView: 2 } }}
      >
        {items.map((item, item_idx) => (
          <SwiperSlide>
            <div key={item_idx} className="grid-item">
              <div className="grid-item-inside">
                {_.get(item, 'image', null) && (
                  <div className="grid-item-image">
                    <img
                      loading="lazy"
                      src={withPrefix(_.get(item, 'image', null))}
                      alt={_.get(item, 'image_alt', null)}
                      style={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )}
                {_.get(item, 'title', null) && (
                  <h3 className="grid-item-title line-left">
                    {_.get(item, 'title_url', null) ? (
                      <Link to={withPrefix(_.get(item, 'title_url', null))}>
                        {_.get(item, 'title', null)}
                      </Link>
                    ) : (
                      _.get(item, 'title', null)
                    )}
                  </h3>
                )}
                {_.get(item, 'content', null) && (
                  <div className="grid-item-content">
                    {markdownify(_.get(item, 'content', null))}
                  </div>
                )}
                {_.get(item, 'actions', null) && (
                  <div className="grid-item-buttons">
                    <CtaButtons actions={_.get(item, 'actions', null)} />
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
