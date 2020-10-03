import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import PostAddFrom from '../post-add-form';
import './app.css';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Осваиваю React!', important: true, id: 1 },
        { label: 'Купить кофе', important: false, id: 2 },
        { label: 'Поспать', important: false, id: 3 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id === id);
    const before = data.slice(0, index);
    const after = data.slice(index +1);
    const newData = [...before, ...after];

    return {
        data: newData
    }
})
  }

  addItem(body) {
     const newItem = {
         label: body,
         important: false,
         id: this.maxId++
     }

    this.setState(({data}) =>{
        const newData = [...data, newItem];
        return {
            data: newData
        }
    })
  }

  render() {
    return(
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList 
      posts={this.state.data} 
      onDelete={this.deleteItem} />
      <PostAddFrom 
      onAdd={this.addItem}/>
    </div>
    )
  }
}
