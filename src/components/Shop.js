import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export default class Shop extends Component {


    constructor() {
        super();
        this.state = {
            products: {}
        };
    }

    componentDidMount() {
        this.loadProducts();
    }


    loadProducts() {
        fetch("./products.json")
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.setState(state => {
                    state.products = products;
                    return state;
                });
            });
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ProductList
                            products={this.state.products}

                        />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        )
    }
}
