import React ,{Component} from 'react';


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
             list = <ol> {this.props.books.map( (book) => <li>{book.name} {book.author}</li>)}</ol>
         } else {
             list = <div> no books in library </div>
         }

         return  (
             <div>
                 {list}
             </div>
         )
    }
}

export default AdminBookListening;