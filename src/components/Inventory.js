import React ,{Component} from 'react';
import BookView from './BookView';
import {fbase} from '../fbase';

class Inventory extends Component {

    constructor() {
        super();
        this.state = {}
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

        let bookListening = <h4> no book on stock </h4>

        if(Array.isArray(this.state.books)) {
            bookListening  =  this.state.books.map( res => {
                        return   <BookView key = {res.name} book = {res} addToOrder = {this.props.addToOrder} />
                    })
        }

        

        return (
         <div className="inventory col-md-6">
                <div className= "text_inventory col-xs-12">  
                   <p><h3>  Book inventory : </h3></p>
                </div>
               { bookListening }
         </div>
         );
    }

}

export default Inventory;