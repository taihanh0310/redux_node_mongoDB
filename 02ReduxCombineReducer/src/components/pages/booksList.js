"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {bindActionCreators} from 'redux'

// react bootstrap component
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './bookItem';

class BooksList extends React.Component {
    componentDidMount(){
        // Dispath a action
        this.props.getBooks();
    }

    render(){
        const booksList = this.props.books.map(function(booksArr){
            return(
                <Col xs={12} sm={6} md={4} key={booksArr.id}>
                    <BookItem
                        id = {booksArr.id}
                        title = {booksArr.title}
                        description = {booksArr.description}
                        price = {booksArr.price}
                        image = {booksArr.image}
                    />
                </Col>
            )
        })
        return(
            <Grid>
                <Row style={{marginTop: '15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state){
    return {
        books: state.books.books
    }
}
// export default BooksList;
// export default connect(mapStateToProps)(BooksList)

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
