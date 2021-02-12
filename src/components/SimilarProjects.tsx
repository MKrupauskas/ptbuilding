import { graphql } from 'gatsby';
import React from 'react';
import { SectionGrid } from '.';

type Props = {
  pages: any;
};

export const SimilarProjects: React.FC<Props> = ({ pages }) => {
  if (!pages?.length) {
    return null;
  }

  const section = {
    title: 'Similar projects',
    col_number: pages.length === 2 ? 'two' : 'one',
    // limit to two
    grid_items: pages.map((item) => {
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
    }),
  };
  return <SectionGrid style={{ background: 'none' }} section={section} />;
};
