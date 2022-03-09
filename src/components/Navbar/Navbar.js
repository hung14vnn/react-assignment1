import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';


class Navbar extends Component {
    state = {clicked : false}
    handleClick = () => {
    this.setState({clicked : !this.state.clicked});
    }
    
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">
                    
                    </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <li><a className={item.cName} href={item.url}>{item.title}</a></li>
                    </li>
                )
            }
            )}
           
        </ul>
        </nav>
        );
    }
}

export default Navbar