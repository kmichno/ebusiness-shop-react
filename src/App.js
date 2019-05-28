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
            <div>
                <div id="menu">
                    <ul>
                        <li>
                            <Link to="/users">Uzytkownicy</Link>
                        </li>
                        <li>
                            <Link to="/products">Produkty</Link>
                        </li>
                        <li>
                            <Link to="/orders">Zamowienia</Link>
                        </li>
                        <li>
                            <Link to="/categories">Kategorie</Link>
                        </li>
                        <li>
                            <Link to="/addproduct">Dodaj produkt</Link>
                        </li>
                        <li>
                            <Link to="/addorder">Dodaj zamowienie</Link>
                        </li>
                        <li>
                            <Link to="/addcategory">Dodaj kategorie</Link>
                        </li>
                        <li>
                            <Link to="/register">Dodaj uzytkownika</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Route path="/users" component={Users}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/orders" component={Orders}/>
                    <Route path="/categories" component={Categories}/>
                    <Route path="/addproduct" component={ProductForm}/>
                    <Route path="/addorder" component={OrderForm}/>
                    <Route path="/addcategory" component={CategoryForm}/>
                    <Route path="/register" component={UserForm}/>
                </div>
            </div>
        </Router>
    }
}

export default App;
