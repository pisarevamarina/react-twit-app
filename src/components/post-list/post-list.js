import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { key, ...itemProps } = item;
    return (
      <li className='list-group-item' key={key}>
        <PostListItem {...itemProps} />
      </li>
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default PostList;
