import React ,{Component} from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import '../index.css'

class App extends Component {

      constructor() {
            super();
            this.state = {
                  books : [],
                  order : []
            }

      }

      addNewBook = (book) => {
            let newBooks = [...this.state.books];

            newBooks.push(book);

            this.setState({
                  books : newBooks
            })
      }

      addToOrder = (book) => {      
            this.setState({
                  order:[...this.state.order, book]
            })

      }

      removeFromOrder = (bookName) => {
            this.setState({
                  order: this.state.order.filter( book => { return book.name !== bookName  } )
            })
      }

      render() {
            return (
            <div className = "app">  
                  <Header/>
            <div className="row">
                  <AdminPanel books = {this.state.books} addBook = {this.addNewBook}/>
                  <Order order = {this.state.order} remove = {this.removeFromOrder}/>
                  <Inventory books ={this.state.books} addToOrder = {this.addToOrder} removeFromOrder = {this.removeFromOrder}/> 
            </div>
                  
            </div>
            
            )
    }

}

export default App;