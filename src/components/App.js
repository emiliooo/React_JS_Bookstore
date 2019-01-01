import React ,{Component} from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import '../index.css'

class App extends Component {

    render() {
         return (
          <div className = "app">  

          <div className="row">
                <Header/>
                <AdminPanel/>
                <Order/>
                <Inventory/> 

          </div>
             
          </div>
         
          )
    }

}

export default App;