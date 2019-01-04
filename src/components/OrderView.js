import React ,{Component} from 'react';

export default class OrderView extends Component {

    render() {
        return (
            <div className = "orderView" >
                <span> { this.props.book.name} </span> 
                <i>{ this.props.book.author} </i>  <br/>
                <img src={ this.props.book.image } width="75" height="100" alt="" />
                <button className="btn btn-warning" onClick={ (event) => this.props.remove(this.props.book.name)}> Remove Order </button>
            </div>
        )
    }

}