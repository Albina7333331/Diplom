import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>

        <div>
          <img
            src={"./" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}
            alt={this.props.item.alt || "img"}
          />
          <p>{this.props.item.title}</p>
          <p>{this.props.item.text}</p>
          <p>{this.props.item.property}</p>
          <b>{this.props.item.price}</b>
          <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem