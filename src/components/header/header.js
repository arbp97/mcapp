import React from 'react';
import {ReactComponent as Logo} from './McDonalds.svg';
import './header.css'

const Header = () => {

    return (
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    <Logo/>
                </div>
            </div>
        </nav>
    )
  }
  
  export default Header;
