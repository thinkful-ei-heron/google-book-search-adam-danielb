import React from 'react';
import Header from './Header';
import Search from './Search';
import BookList from './BookList';

class App extends React.Component {
  state = {
    items: [],
    error: null
  }

  onSearch = (e, query) => {
    e.preventDefault()
    this.fetchBooks(query)
  }

  queryCreate = (print, book, title) => {
    if book ? ""
    if
  queryString = '?q='

  }

  fetchBooks = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
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
