import React ,{Component} from 'react';
import OrderView from './OrderView'

class Order extends Component {

    render() {

         const bookOrdered = this.props.order.map( book => {
            return <OrderView  book = {book} remove = {this.props.remove}  />
          })

         return ( 

            <div className="order col-md-6">
                <div className= "col-xs-12">  
                   <p><h3>  Book Ordered :</h3></p>
                 </div>
                <h2> {bookOrdered} </h2>
            </div> 
         
         )
    }

}

export default Order;