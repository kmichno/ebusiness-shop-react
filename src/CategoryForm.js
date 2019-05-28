import React, {Component} from 'react';

class CategoryForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/addcategory';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Nazwa kategorii</label>
                <input id="name" name="name" type="text" />
                <label htmlFor="description">Opis kategorii</label>
                <input id="description" name="description" type="text" />
                <button>Dodaj kategorie</button>
            </form>
        );
    }

}


export default CategoryForm;