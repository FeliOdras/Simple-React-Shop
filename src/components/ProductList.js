import React, { Component, Fragment } from 'react'
import Product from './Product';

export default class ProductList extends Component {

    render() {
        const productCount = Object.keys(this.props.products).length;
        return (
            <div id="products">
                <h1>Products</h1>

                {productCount === 0 && (
                    <div className="empty">
                        <i className="fas fa-spinner fa-spin" />
                        &nbsp; Loading ...
                </div>
                )}

                {productCount > 0 && (
                    <Fragment>
                        <div className="row">
                            {Object.keys(this.props.products).map(id => (
                                <div key={id} className="col-sm-6 col-md-6 col-lg-6">
                                    <Product
                                        key={id}
                                        product={this.props.products[id]}

                                    />
                                </div>
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>
        );
    }
}
