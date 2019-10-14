import React from 'react';
import Header from './Header';
import Search from './Search';
import BookList from './BookList';

class App extends React.Component {
  state = {
    items: [],
    error: null
  }

  onSearch = (e, title, printType, filter) => {
    e.preventDefault()
    this.fetchBooks(this.queryCreate(title, printType, filter))
  }

  queryCreate = (title, printType, filter) => {
    const queryArray = []
    if(title) queryArray.push(title ? `?q=${title}` : '')
    if(printType)queryArray.push( printType ? `printType=${printType}` : '')
    if(filter)queryArray.push( filter ? `filter=${filter}` : '')
    return queryArray.join('&')
  }


  fetchBooks = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes${query}`
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      } 
    }

    fetch(url, options)
      .then(res => {
        if(!res.ok){
          throw new Error('ummm')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.items
        })
      }).catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {

    return (
      <div>
        <Header />
        <Search submit={this.onSearch}/>
        <BookList state={this.state}/>
      </div>
    )

    
  }
}

export default App;
