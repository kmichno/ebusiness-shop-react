import React, {Component} from 'react';

class ProductForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/addproduct';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Nazwa produktu</label>
                <input id="name" name="name" type="text" />

                <label htmlFor="description">Opis produktu</label>
                <input id="description" name="description" type="text" />

                <label htmlFor="price">Cena</label>
                <input id="price" name="price" type="number" />

                <label htmlFor="categoryId">Kategoria</label>
                <input id="categoryId" name="categoryId" type="number" />

                <button>Dodaj produkt</button>
            </form>
        );
    }

}


export default ProductForm;