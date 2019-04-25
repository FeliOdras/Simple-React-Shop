import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export default class Shop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ProductList />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        )
    }
}
