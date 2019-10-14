import React from 'react';

function Book(props) {

  const price = (salePrice) => {
    if(!salePrice){
      return 'No Price'
    } else {
      return salePrice.amount
    }
  }

  return(
    <div>
      <h3>{props.title}</h3>
      <h5>{price(props.salePrice)}</h5>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
      <img src={props.url} alt="" />
    </div>
  )

}

export default Book;
