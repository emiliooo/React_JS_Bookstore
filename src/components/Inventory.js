import React ,{Component} from 'react';
import BookView from './BookView';
import {fbase} from '../fbase';

class Inventory extends Component {

    constructor() {
        super();
        this.state = ({
            books: []
        })
    }

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componetnWillUnmount() {
        fbase.removeBinding(this.ref)
    }


    render() {
        const booksListening  =  this.state.books.map( res => {
            return   <BookView book = {res} addToOrder = {this.props.addToOrder} />
        })

        return (
         <div className="inventory col-md-6">
                <div className= "text_inventory col-xs-12">  
                   <p><h3>  Book inventory : </h3></p>
                </div>
               { booksListening }
         </div>
         );
    }

}

export default Inventory;