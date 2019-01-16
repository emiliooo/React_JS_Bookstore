import React ,{Component} from 'react';
import { firebaseApp } from '../fbase';

class LoginPanel extends Component {

    constructor() {
        super();
        this.state = ({
            email:"",
            password:""
        })
    }

    authenticate = (event) => {  
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(()=> {
                 this.props.changeLogIn(true);
                 localStorage.setItem('loggedIn',true);
            })
            .catch ( () => {
                alert('error w hasle lub loginie');
            })
        //console.log(`${this.state.email} ${this.state.password}`);
    }

    handleLoginChange = (event) => {
        this.setState  ({
            [event.target.name]: event.target.value 
        })
    }

    render() {
        return (
            <form className="col-md-offset-5 col-md-3 col-xs-3 col-xs-offset-5" onSubmit={this.authenticate}>
                 <input type="text" placeholder="email" name="email" id="email" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.email} />
                 <input type="password"  placeholder="password" id="password" name="password" className="form-control"
                    onChange={this.handleLoginChange} value={this.state.password} />
                <button type="submit" class="btn btn-primary"> Add </button>
            </form>
         )
    }

}

export default LoginPanel;