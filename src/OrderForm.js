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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="order_date">Order date</label>
                <input id="order_date" name="order_date" type="text" />

                <label htmlFor="userId">User id</label>
                <input id="userId" name="userId" type="number" />

                <button>Dodaj zamowienie</button>
            </form>
        );
    }

}


export default OrderForm;