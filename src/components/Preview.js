import React from 'react';
import Advanced from '../templates/advanced';
import Post from '../templates/post';
import Page from '../templates/page';
import Portfolio from '../templates/portfolio';
import Blog from '../templates/blog';
import Docs from '../templates/docs';
import marked from 'marked';

const Preview = (props) => {
  const entry = props.entry?.toJS?.();
  const { template, ...frontmatter } = entry?.data ?? {};
  console.log(entry?.data);

  if (template === 'advanced') {
    return <Advanced pageContext={{ frontmatter }} isPreview />;
  }

  if (template === 'post') {
    return (
      <Post
        pageContext={{ html: marked(frontmatter.body ?? ''), frontmatter }}
        isPreview
      />
    );
  }

  if (template === 'page') {
    return (
      <Page
        pageContext={{ html: marked(frontmatter.body ?? ''), frontmatter }}
        isPreview
      />
    );
  }

  if (template === 'portfolio') {
    return (
      <Portfolio
        pageContext={{ html: marked(frontmatter.body ?? ''), frontmatter }}
        isPreview
      />
    );
  }

  if (template === 'blog') {
    return <Blog pageContext={{ frontmatter }} isPreview></Blog>;
  }

  if (template === 'docs') {
    return (
      <Docs
        pageContext={{ html: marked(frontmatter.body ?? ''), frontmatter }}
        isPreview
      ></Docs>
    );
  }

  return frontmatter?.title;
};

export default Preview;
