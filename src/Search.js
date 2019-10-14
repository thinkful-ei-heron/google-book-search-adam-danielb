import React from 'react';

class Search extends React.Component {

  state = {
    title: ''
  } 

  searchQuery = (title) => {
    this.setState({
      title
    })
  }

  render(){
    return(
      <div>
        <form>
          <label htmlFor="">Search</label>
          <input type="text" 
                 className="js-search" 
                 name="searchTerm" 
                 value={this.state.title}
                 onChange={e => this.searchQuery(e.target.value)}
          />
          <button onClick={e => this.props.submit(e, this.state.title)}>Submit</button>
        </form>
        <form action="">
          <label htmlFor="">Print Type:</label>
          <select></select>
          <label htmlFor="">Book Type:</label>
          <select></select>
        </form>
      </div>
    )

  }

}

export default Search;
