import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img
                    src={process.env.PUBLIC_URL + "/" + this.props.item.img}
                    onClick={() => this.props.onShowItem(this.props.item)}
                    alt={this.props.item.alt || "img"}
                />
                <p><strong>{this.props.item.title}</strong></p>
                <p>{this.props.item.text}</p>
                <p>{this.props.item.property}</p>
                <b>{this.props.item.price}</b>

                <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}

export default Item;
