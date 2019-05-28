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
                    <div className="form" key={prod.id}>
                        <div>Nazwa produktu: {prod.name}</div>
                        <div>Opis produktu: {prod.description}</div>
                        <div>Cena: {prod.price}</div>
                        <div>Id kategorii{prod.categoryId}</div>
                    </div>
                )
            });
            this.setState({products: products})
        })
    }

    render() {
        return (
            <div>
                {this.state.products}
            </div>
        )
    }
}

export default Products;