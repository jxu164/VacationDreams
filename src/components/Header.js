import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import './Header.css';

function Header() {
    const [head, setHead] = useState(false);
    const handleHead = () =>setHead(!head);

    return (
        <div className = 'Headers'>
            <div className = "logo">
                <h2> DreamCations</h2>
            </div>

            <ul className = "nav-menu">
                <li>Home</li>
                <li>Properties</li>
                <li>Bestsellers</li>
                <li>Login</li>
            </ul>

            <div className = "max-icons">
                <BiSearch className = 'icon' style = {{marginRight: '1rem'}}/>
                <BsPerson className = 'icon'/>
            </div>

            <div className = "Hamburger" onClick ={handleHead}>
                {!head ? (<HiOutlineMenuAlt4 className = 'icon' />) : (<AiOutlineClose className = 'icon'/>)}
            </div>

        </div>
    )
}

export default Header