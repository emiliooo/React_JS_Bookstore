import React ,{Component} from 'react';
import BookView from './BookView';

class Inventory extends Component {

    render() {

        // const booksListening  =  this.props.books.map( res => {
        //     return   <BookView book = {res} addToOrder = {this.props.addToOrder} />
        // })

         return (
         <div className="inventory  col-md-4">
               {/* { booksListening } */}
         </div>
         );
    }

}

export default Inventory;