import React ,{Component} from 'react';

export default class BookView extends Component {


    render() {
        return (
            <div>
                <b>{ this.props.book.name}</b> <br/>
                <i>{ this.props.book.author} </i>  <br/>
                <img src={ this.props.book.image } width="75" height="100" alt="" />
                <button className="btn btn-primary" onClick={ (event) => this.props.addToOrder(this.props.book)}> Add to Order </button>
            </div>
        )
    }

}