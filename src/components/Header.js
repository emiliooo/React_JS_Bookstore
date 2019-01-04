import React ,{Component} from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
         return <div className="row header">    
         <center>  <h2>Black books</h2> </center> 
         <Link  className="link_admin"to="/admin">Go to admin panel</Link>


         </div>
    }

}

export default Header;