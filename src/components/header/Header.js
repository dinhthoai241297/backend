import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div id="mobile-menu">
                            <div className="left-nav-toggle">
                                <a href="#">
                                    <i className="stroke-hamburgermenu"></i>
                                </a>
                            </div>
                        </div>
                        <a className="navbar-brand" href="index.html">
                            LUNA
                            <span>v.1.3</span>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <div className="left-nav-toggle">
                            <a href="">
                                <i className="stroke-hamburgermenu"></i>
                            </a>
                        </div>
                        <form className="navbar-form navbar-left">
                            <input type="text" className="form-control" placeholder="Search data for analysis" style={{width: 175 + 'px'}} />>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="versions.html">Versions
                            <span className="label label-warning pull-right">2</span>
                                </a>
                            </li>
                            <li className=" profil-link">
                                <a href="login.html">
                                    <span className="profile-address">luna@company.io</span>
                                    <img src="images/profile.jpg" className="img-circle" alt="" />>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;