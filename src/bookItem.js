import React from 'react';


class BookItem extends React.Component {
    render() {
        const price =(price) => {
            console.log(price)
            if(!price){
                return 'Not For Sale'
            } else {
                return price
            }
        }
        return (
            this.props.books.map(book => {
                return (
                <div className='list-item' key={book.key}>
                <img src={book.url} className='book-img' alt=''/>
                <div className='book-details'>
                    <h2>{book.title}</h2>
                    <span className='details author'>Author:{book.authors}</span>
                    <span className='details price'>Price:{price(book.price)}</span>
                    <p className='details description'>{book.description}</p>
                </div>
            </div>
            )}) 
        )
    }
}

export default BookItem;