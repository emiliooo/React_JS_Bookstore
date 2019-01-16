import React ,{Component} from 'react';

export default class AdminBookView extends Component {

    render() {
        return (
                <div className="row orderView"> 
                    <div className="col-xs-8"> 
                        <span> <b> {this.props.book.name} {this.props.book.author} </b>  </span>
                    </div>
                    <div className="col-xs-4"> 
                         <button className="btn btn-danger" onClick={ (event) => this.props.removeFromInventory(this.props.book.name)}> Remove Order </button>
                    </div>
                </div>       
        )
    }
}