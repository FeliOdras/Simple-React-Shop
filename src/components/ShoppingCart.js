import React, { Component } from 'react'
import ShoppingCartItem from './ShoppingCartItem';

export default class ShoppingCart extends Component {
    render() {
        return (
            <div id="cart">
                <h1>Shopping Cart</h1>
                <ShoppingCartItem />
            </div>
        )
    }
}
