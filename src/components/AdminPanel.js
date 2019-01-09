import React ,{Component} from 'react';
import {fbase , firebaseApp} from '../fbase';

class AdminPanel extends Component {

    constructor() {
        super();
        this.state = {
            books:[],
            book : {
                name : "",
                author: "",
                description:"",
                onStock :true,
                image:""
            },
            loggedIn :false,
            email: '',
            password:''
        }
    }

    handleLoginChange = (event) => {

        this.setState  ({
            [event.target.name]: event.target.value 
        })

    }

    handleChange = (event) => {

        let newBook;

        if(event.target.name === "onStock") {
            newBook = {
                ...this.state.book,  
                [event.target.name]: event.target.checked  
            };
        } else {
            newBook = {
                ...this.state.book,  
                [event.target.name]: event.target.value  
            };
        }
        this.setState({
            book : newBook
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        

        let newBook = { ...this.state.book };

       //this.props.addBook(newBook);

       if(Array.isArray(this.state.books)) {
          this.setState({books: [...this.state.books, newBook] })
            } else {
            this.setState({books: [newBook]})
        }
          

        this.setState({
            book : {
                name : "",
                author: "",
                description:"",
                onStock :true,
                image:""
            }
        })
    }

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

    authenticate = (event) => {  
        event.preventDefault();
        firebaseApp.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password)
            .then(()=> {
                this.setState({
                    loggedIn: true
                 })
                 localStorage.setItem('loggedIn',true);
            })
            .catch ( () => {
                console.log("error to autho")
            })
        //console.log(`${this.state.email} ${this.state.password}`);
    }

    render() {
         return (
         <div>
            {!this.state.loggedIn  && 
               <form className="col-md-offset-5 col-md-3 col-xs-3 col-xs-offset-5" onSubmit={this.authenticate}>
                 <input type="text" placeholder="email" name="email" id="email" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.email} />
                 <input type="password"  placeholder="password" id="password" name="password" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.password} />
                <button type="submit" class="btn btn-primary"> Add </button>
               </form>
            }
         { this.state.loggedIn && 
         <div className="adminPanel col-md-4">
            <form onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <input type="text" placeholder="Book name" id="name" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="author" name="author" className="form-control" onChange={this.handleChange} value={this.state.book.author} />
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Book description" id="description" name="description" className="form-control" onChange={this.handleChange} value={this.state.book.description}/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="bookOnStock" name="onStock" className="form-check-input" onChange={this.handleChange} value={this.state.book.onStock}/>
                        <label htmlFor="bookOnStock" className="form-check-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="book image" id="bookimageInput" name="image" className="form-control"  onChange={this.handleChange} value={this.state.book.bookimage}/>
                    </div>
                    <button type="submit" className="btn btn-primary"> Submit </button>
            </form>
          </div>
         }
         </div>
         )

    }
}

export default AdminPanel;