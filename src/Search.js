import React from 'react';

class Search extends React.Component {

  state = {
    title: '',
    printType: '',
    filter: ''
  } 

  searchQuery = (title) => {
    this.setState({
      title
    })
  }

  filterQuery = (filter) => {
    this.setState({
      filter
    })
  }

  printTypeQuery = (printType) => {
    this.setState({
      printType
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
          <button onClick={e => this.props.submit(e, 
            this.state.title,
            this.state.printType,
            this.state.filter)}>Submit</button>
        </form>
        <form action="">
          <label htmlFor="">Print Type:</label>
          <select name="printType"
                  onChange={e => this.printTypeQuery(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="">Book Type:</label>
          <select name="filterBy"
                  onChange={e => this.filterQuery(e.target.value)}
          >
            <option value="">None</option>
            <option value="full">Full Books</option>
            <option value="partial">Partial</option>
            <option value="ebooks">Ebooks</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="free-ebooks">Free Ebooks</option>
          </select>
        </form>
      </div>
    )

  }

}

export default Search;
