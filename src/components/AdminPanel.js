import React ,{Component} from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';
import AdminBookListening from './AdminBookListening';
import {fbase} from '../fbase';

class AdminPanel extends Component {

    constructor() {
        super();

        this.state = ({
            loggedIn : false,
            books:[],
            book : {
                name : "",
                author: "",
                description:"",
                onStock :true,
                image:""
            }
        })
    }

    changeLogIn = (newValue) => this.setState({ loggedIn: newValue  })

    componentDidMount() {
        if(localStorage.getItem('loggedIn')){
            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            })  
        }
        console.log( localStorage.getItem('loggedIn') )

        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componetnWillUnmount() {
        fbase.removeBinding(this.ref)
    }

    removeFromInventory = (bookName) => {
        this.setState({
              books: this.state.books.filter( book => { return book.name !== bookName  } )
        })
    }

    AddNewBook = (book) => {
        if(Array.isArray(this.state.books)) {
            this.setState({books: [...this.state.books, book] })
              } else {
              this.setState({books: [book]})
          }
    }
 

    render() {
         return (
         <div>
            {!this.state.loggedIn  && 
               <LoginPanel changeLogIn = {this.changeLogIn} />
            }
         { this.state.loggedIn &&
            <fragment>
             <AddBookForm AddNewBook = {this.AddNewBook}/>
             <AdminBookListening books = {this.state.books} removeFromInventory = {this.removeFromInventory}/>
            </fragment> 
            

             
         }
         </div>
         )

    }
}

export default AdminPanel;