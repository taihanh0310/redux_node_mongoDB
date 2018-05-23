"use strict"

import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component {
    componentDidMount(){
        this.props.getBooks();
    }

    render(){
        const booksList = this.props.books.map(function(booksArr){
            return(
                <div key={booksArr.id}>
                    <h2>{booksArr.title}</h2>
                    <h2>{booksArr.description}</h2>
                    <h2>{booksArr.price}</h2>
                </div>
            )
        })
        return(
            <div>
                <h1>Hello react</h1>
                {booksList}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        books: state.books.books
    }
}
// export default BooksList;
export default connect(mapStateToProps)(BooksList)