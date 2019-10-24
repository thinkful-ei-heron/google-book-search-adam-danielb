import React from 'react';
import BookItem from './bookItem';
class BookList extends React.Component {
    render() {
        return (
            <main className='book-list'>
                <BookItem books={this.props.books} />
            </main>
        )
    }
}

export default BookList;