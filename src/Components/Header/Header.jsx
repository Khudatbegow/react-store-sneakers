import React from 'react';
import './Header.css';
import Logo from "../../images/logo.svg";
import { FiShoppingCart } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';

function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <a className="header-logo" href="#" >
                    <img className="logotype" src={Logo} alt="logotype" />
                    <div className="header-logo__text">
                        <h1 className="header-logo__title">REACT SNEAKERS</h1>
                        <p className="header-logo__subtitle">Магазин лучших кроссовок</p>
                    </div>
                </a>
                <div className="header-icons">
                    <ul className="header-icons-list">
                        <li className="header-icons-list__item"><FiShoppingCart
                            size={20}
                            color={"#9D9D9D"} /> <span className="header-icons-list__item-price">1205 руб.</span>
                        </li>
                        <li className="header-icons-list__item"><MdFavoriteBorder
                            size={20}
                            color={"#9D9D9D"}
                        />
                        </li>
                        <li className="header-icons-list__item"><BiUserCircle
                            size={20}
                            color={"#9D9D9D"} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;