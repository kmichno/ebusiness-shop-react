import React, {Component} from 'react';

class Products extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/products";

        fetch(url, {
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: 'GET',
        })
            .then(results => {
                return results.json();
            }).then(data => {
            let products = data.map((prod) => {
                return (
                    <div key={prod.id}>
                        <div className="product">{prod.name}</div>
                        <div className="product">{prod.description}</div>
                        <div className="product">{prod.price}</div>
                        <div className="product">{prod.categoryId}</div>
                    </div>
                )
            });
            this.setState({products: products})
        })
    }

    render() {
        return (
            <div className="products">
                {this.state.products}
            </div>
        )
    }
}

export default Products;