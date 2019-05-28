import React, {Component} from 'react';

class UserForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        var url = 'http://localhost:9000/register';

        fetch(url, {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required={true} />

                <label htmlFor="age">Password</label>
                <input id="age" name="age" type="number" />

                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />

                <button>Add user</button>
            </form>
        );
    }

}


export default UserForm;