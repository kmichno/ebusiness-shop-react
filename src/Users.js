import React, {Component} from 'react';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        var url = "http://localhost:9000/users";

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
            let users = data.map((user) => {
                return (
                    <div key={user.id}>
                        <div className="userName inp">{user.name}</div>
                        <div className="userName">{user.age}</div>
                        <div className="userName">{user.address}</div>
                    </div>
                )
            });
            this.setState({users: users})
        })
    }

    render() {
        return (
            <div className="users">
                {this.state.users}
            </div>
        )
    }
}

export default Users;