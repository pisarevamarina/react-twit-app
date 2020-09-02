import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import PostAddFrom from '../post-add-form';

const App = () => {
    return(
 <div className='App'>
        <AppHeader/>
    <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
    </div>
    <PostList/>
    <PostAddFrom/>
 </div>
    ) 
}

export default App