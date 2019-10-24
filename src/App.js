import React from 'react';
import AppForm from './appForm';
import BookList from './bookList';

class App extends React.Component {
  state = {
    books: []
  }

  buildNewState = (data) => {
    console.log(data);
    let newState = [];
    data.items.forEach(item => {
      newState.push({
        key: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'No Author',
        price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0,
        description: item.volumeInfo.description,
        url: item.volumeInfo.imageLinks.smallThumbnail,
      })
    });
    this.setState({
      books: [...newState]
    })
  }


  getBooksData(keyword) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then(res => {
        if(!res.ok){
          throw new Error('Error')
        }
        return res
      })
      .then(res => res.json())
      .then(data => this.buildNewState(data))
      .catch(err => this.setState({error: err.message}))
  }


  handleSearch = (e, keyword, printType, bookType) => {
    e.preventDefault();
    this.getBooksData(this.queryCreate(keyword, printType, bookType));
  }

  queryCreate = (keyword, printType, bookType) => {
    const queryArray = [];
    if (keyword)queryArray.push(keyword ? `?q=${keyword}` : '');
    if (printType)queryArray.push(printType ? `printType=${printType}` : '');
    if (bookType)queryArray.push(bookType ? `filter=${bookType}` : '')
    return queryArray.join('&');
  }

  render() {

    return (
      <div className='App'>
        <header className='App-title'>
          <h1>Google Book Search</h1>
          <AppForm handleSearch={this.handleSearch} />
        </header>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;