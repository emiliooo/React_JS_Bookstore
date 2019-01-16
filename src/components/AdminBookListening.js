import React ,{Component} from 'react';
import AdminBookView from './AdminBookView';

class AdminBookListening extends Component {

    constructor() {
        super();
        this.setState = {
            books: []
        }
    }

    render() {
         let list;

         if(this.props.books) {
             list = this.props.books.map((book) => <AdminBookView book = {book} removeFromInventory = {this.props.removeFromInventory} />  )
         } else {
             list = <div> no books in library </div>;
         }

         return  (
             <div>
                 {list}
             </div>
         )
    }
}

export default AdminBookListening;