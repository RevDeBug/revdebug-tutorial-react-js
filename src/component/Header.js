import React from 'react';
import './App.css';

const Header = () => {
    return (
        <div className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        <img className="logo" src="/Images/reactInv.png" alt="Invoices Logo" />
                    </a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                <br />
                                Accounts
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
                                <br />
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a href="/Invoices">
                                <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                                <br />
                                Invoices
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="glyphicon glyphicon-credit-card" aria-hidden="true"></span>
                                <br />
                                Payments
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className="glyphicon glyphicon-book" aria-hidden="true"></span>
                                <br />
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
