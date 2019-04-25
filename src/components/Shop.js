import React, { Component } from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export default class Shop extends Component {


    constructor() {
        super();
        this.state = {
            products: {},
            //add cart to the state
            cart: {}
        };
    }

    componentDidMount() {
        this.loadProducts();
    }


    loadProducts() {
        fetch("products.json")
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

    // the function to add product to cart
    addProductToCart = (productId, amount) => {
        console.log(`Add ${productId} quantity ${amount}`)

        // if productId is in the state
        // increase its amout




        // otherweise
        // add it to the state

        this.setState(state => {
            state.cart[productId] = amount;
            return state;
        });


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ProductList
                            products={this.state.products}
                            // the prop to pass the function to child component
                            addProductToCart={this.addProductToCart}
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
