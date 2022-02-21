import React from 'react';
import logo from '../assets/images/logo.svg';

import {LogoutOutlined} from '@ant-design/icons';

//rsc
function TopBar(props) {
    // const {isLoggedIn, handleLogout} = props;

    return (
        <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <span className='App-title'>Around Web</span>

        </header>
    )
}

export default TopBar