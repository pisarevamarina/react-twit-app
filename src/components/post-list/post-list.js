import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map(function(item, index) {
        const{id, ...itemProps} = item;
        return (
            <li key={index} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList;