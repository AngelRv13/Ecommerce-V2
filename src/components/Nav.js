import React from 'react';
import '../App.css';
import { IconButton } from 'evergreen-ui'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <div class="nav-container">
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-item" src="/public/images/7O4KicksLogo.png"></li>
                        <Link to='/'>
                            <li class="nav-item">Home</li>
                        </Link>
                        <Link to='/Products'>
                            <li class="nav-item">Products</li>
                        </Link>
                        <Link to='/Contact'>
                            <li class="nav-item">Contact</li>
                        </Link>
                        <li class="nav-item"><IconButton icon="shopping-cart" size={10} color="success"  >Hi Evergreen!</IconButton></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;