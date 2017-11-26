import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
renderList(){
    return this.props.books.map((book) => {
        return(
            <li 
                onClick={() => this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">
                {book.title}
            </li>
        );
    })
}

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStatetoProps(state){
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books : state.books
    }
}
// Anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
    // whenever selectBook is called, the result should be passed to all of our reducers
    //bindActionActionCreators method will dispatch whatever is returned from the function selectBook
    // to all the reducers, so that it can be made available to all the containers as props.
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container 
// It needs to know about this new dispatch method, selectBook
// Make it available as a prop
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);