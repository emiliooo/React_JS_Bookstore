import React ,{Component} from 'react';

export default class OrderView extends Component {

    render() {
        return (
                <div className="row orderView"> 
                    <div className="col-xs-4"> 
                         <img src={ this.props.book.image } width="75" height="100" alt="" />
                    </div>
                    <div className="col-xs-4"> 
                        <span> <b> { this.props.book.name} </b>  </span> 
                        <i>{ this.props.book.author} </i>  <br/>
                    </div>
                    <div className="col-xs-4"> 
                         <button className="btn btn-warning" onClick={ (event) => this.props.remove(this.props.book.name)}> Remove Order </button>
                    </div>
                </div>       
        )
    }

}