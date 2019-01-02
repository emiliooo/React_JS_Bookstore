import React ,{Component} from 'react';

class AdminPanel extends Component {

    constructor() {
        super();
        this.state = {
            book : {
                name : "",
                author: "",
                description:"",
                onStock :true,
                Image:""
            },
            books : []
        }
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
        let newBooks = [...this.state.books];

        let newBook = { ...this.state.book };

        newBooks.push(newBooks); 

        this.setState({
            book : newBooks
        })
        event.preventDefault();
    }

    render() {
         return (
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
                        <input type="text" placeholder="book image" id="bookImageInput" name="Image" className="form-control"  onChange={this.handleChange} value={this.state.book.bookImage}/>
                    </div>
                    <button> Submit </button>
            </form>
    
          </div>
         )
    }

}

export default AdminPanel;