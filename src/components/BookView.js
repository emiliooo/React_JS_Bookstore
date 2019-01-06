import React ,{Component} from 'react';

export default class BookView extends Component {


    render() {
        return (
            <div> 
                <div className="row bookview">
                    <div className = "col-xs-4">
                          <img src={ this.props.book.image } width="75" height="100" alt="" />
                    </div>
                    <div className = "col-xs-4">
                          <b>{ this.props.book.name}</b> <br/>
                          <i>{ this.props.book.author} </i>  <br/>
                    </div>
                    <div className = "col-xs-4">            
                           <button className="btn btn-primary" onClick={ (event) => this.props.addToOrder(this.props.book)}> Add to Order </button>
                    </div>
                </div>
            </div>
        )
    }

}