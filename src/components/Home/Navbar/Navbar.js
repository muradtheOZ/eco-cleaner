import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../resources/images/logo.png'

const Navbar = () => {
    const { name } = useParams();
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"><img style={{ height: '100px' }} src={logo} alt="" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mr-4" to="/order/:`${name}`">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/order/:`${name}`" ><button className="btn main-btn">Login</button></Link>
                        </li>
                        <li>
                            <button className="btn main-btn ml-1" onClick={() => { sessionStorage.clear() }}>LogOut</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;