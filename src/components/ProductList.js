import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <div id="products">
                <h1>Products</h1>
                <Product />
            </div>
        )
    }
}
