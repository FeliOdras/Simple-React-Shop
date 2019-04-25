import React, { Component } from "react";

class Product extends Component {
    inputAmount = React.createRef();

    render() {
        const product = this.props.product;

        return (
            <div className="product">
                <h2>{product.name}</h2>
                <div className="description">{product.description}</div>
                <div className="price">€ {product.price}</div>

                <div className="form-inline mt-2">
                    <input
                        type="text"
                        className="form-control form-control-sm  mr-2"
                        defaultValue="1"
                        size="4"
                        ref={this.inputAmount}
                    />
                    <button
                        className="add-to-cart btn btn-sm btn-primary"
                        onClick={() => this.props.addProductToCart(product._id, Number(this.inputAmount.current.value))}
                    >
                        <i className="fas fa-shopping-cart"></i> Add to cart
          </button>
                </div>
            </div>
        );
    }
}

export default Product;
