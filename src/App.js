import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Categories from "./Categories";
import Products from './Products'
import Users from './Users'
import Orders from "./Orders";
import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import UserForm from "./UserForm";
import OrderForm from "./OrderForm";

class App extends Component {
    render() {
        return <Router>
            <div id="menu">
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/addproduct">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/addorder">Add Order</Link>
                    </li>
                    <li>
                        <Link to="/addcategory">Add Category</Link>
                    </li>
                    <li>
                        <Link to="/register">Register new user</Link>
                    </li>
                </ul>
                <Route path="/users" component={Users}/>
                <Route path="/products" component={Products}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/categories" component={Categories}/>
                <Route path="/addproduct" component={ProductForm}/>
                <Route path="/addorder" component={OrderForm}/>
                <Route path="/addcategory" component={CategoryForm}/>
                <Route path="/register" component={UserForm}/>
            </div>
        </Router>
    }
}

export default App;
