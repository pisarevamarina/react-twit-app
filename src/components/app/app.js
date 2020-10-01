import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import PostAddFrom from '../post-add-form';
import './app.css'

const data = [
    {label:'Осваиваю React!', important: true, key: '5765gfhg76'},
    {label:'Почти освоил React...', important: false, key: 'lfkvjlkjer9'},
    {label:'Help', important: false, key: '9874tyuhfeoirfhe'}
]

const App = () => {
    return(
 <div className='app'>
        <AppHeader/>
    <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
    </div>
    <PostList posts = {data}/>
    <PostAddFrom/>
 </div>
    ) 
}

export default App