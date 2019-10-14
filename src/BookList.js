import React from 'react';
import Book from './Book'


function BookList(props) {

  
  const createList = () => {
  }

  return ( 
          <div>
            {props.state.items.map(x => {
              return <Book key={x.id}
                           title={x.volumeInfo.title}
                           author={x.volumeInfo.authors}  
                           description={x.volumeInfo.description}
                           salePrice={x.saleInfo.listPrice}
                           url={x.volumeInfo.imageLinks.smallThumbnail}
                     />
            })}
          </div>
  )
}

export default BookList;
