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
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Nazwa kategorii</label>
                    <input id="name" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="description">Opis kategorii</label>
                    <input id="description" name="description" type="text" />
                </div>
                <div>
                    <button>Dodaj kategorie</button>
                </div>
            </form>
        );
    }

}


export default CategoryForm;