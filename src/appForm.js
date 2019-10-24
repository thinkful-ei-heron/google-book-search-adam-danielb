import React from 'react';

class AppForm extends React.Component {
    state = {
        keyword: '',
        bookType: '',
        printType: '',
    }

    searchQuery = (keyword) => {
        this.setState({
            keyword
        })
    }

    bookTypeQuery = (bookType) => {
        this.setState({
            bookType
        })
    }

    printTypeQuery = (printType) => {
        this.setState({
            printType
        })
    }
    render() {
        return (
            <div>
                <form className='search-form'>
                    <div className='search-bar'>
                        <label htmlFor='search' className='search search-label'>Search:</label>
                        <input type='text' onChange={(e) => this.searchQuery(e.target.value)} value={this.state.keyword} className='search search-input' id='search' name='search' placeholder='ex. Harry Potter'></input>
                        <button onClick={(e) => this.props.handleSearch(e, this.state.keyword, this.state.printType, this.state.bookType)} className='search search-button'>Search</button>
                    </div>
                </form>
                <form className='filter-form'>
                    <div className='filter-bar'>
                        <label htmlFor='print-type' className='filter print-type'>Print Type:</label>
                        <select id='print-type' name='printType' className='filter print-type' onChange={e => this.printTypeQuery(e.target.value)}>
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                        <label htmlFor='book-type' className='filter book-type'>Book Type:</label>
                        <select id='book-type' name='bookType' className='filter book-type' onChange={e => this.bookTypeQuery(e.target.value)}>
                            <option value="">None</option>
                            <option value="full">Full Books</option>
                            <option value="partial">Partial</option>
                            <option value="ebooks">Ebooks</option>
                            <option value="paid-ebooks">Paid Ebooks</option>
                            <option value="free-ebooks">Free Ebooks</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default AppForm;