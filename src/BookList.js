import React from 'react';
import Book from './Book'


function BookList(props) {
  return ( 
          <div>
            {props.state.items.map(x => {
              return <Book key={x.key}
                           title={x.title}
                           author={x.authors}  
                           description={x.description}
                           salePrice={x.listPrice}
                           url={x.url}
                     />
            })}
          </div>
  )
}

export default BookList;
