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
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Nazwa uzytkownika</label>
                    <input id="name" name="name" type="text" required={true} />
                </div>
                <div>
                    <label htmlFor="age">Wiek</label>
                    <input id="age" name="age" type="number" />
                </div>
                <div>
                    <label htmlFor="address">Adres</label>
                    <input id="address" name="address" type="text" />
                </div>
                <div>
                    <button>Dodaj uzytkownika</button>
                </div>
            </form>
        );
    }

}


export default UserForm;