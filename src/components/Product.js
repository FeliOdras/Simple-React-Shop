import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (

            <div class="col-sm-6 col-md-6 col-lg-6">
                <div class="product">
                    <h2>Product One</h2>
                    <div class="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                    <div class="price">€ 4.99</div>
                    <div class="form-inline mt-2"><input type="text" class="form-control form-control-sm  mr-2" size="4" value="1" />
                        <button class="add-to-cart btn btn-sm btn-primary"><i class="fas fa-shopping-cart">
                        </i> Add to cart</button>
                    </div>
                </div>
            </div>

        )
    }
}
