import React, {Component} from 'react';

class OrderForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/addorder';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="order_date">Data zamowienia:</label>
                    <input id="order_date" name="order_date" type="text" />
                </div>
                <div>
                    <label htmlFor="userId">Id uzytkownika:</label>
                    <input id="userId" name="userId" type="number" />
                </div>
                <div>
                    <button>Dodaj zamowienie</button>
                </div>
            </form>
        );
    }

}


export default OrderForm;