import React from 'react';
import './Drawer.css';
import { BsArrowRightShort } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import img from "../../images/sneakers1.png";

function Drawer() {
    return (
        <div style={{ display: "none" }} className="modal-overlay">
            <div className="drawer-modal">
                <div className="cart-header">
                    <h2 className="drawer-modal__title">Корзина</h2>
                    <button className="btn btn-add">
                        <GrFormClose className="icon cart-item__icon" />
                    </button>
                </div>
                <div className="cart">
                    <div className="cart-item">
                        <img className='cart-item__img' src={img} alt="cart img" />
                        <div className="cart-item__info">
                            <p className="cart-item__title">Мужские Кроссовки Nike Air Max 270</p>
                            <div className="cart-item__price">12 999 руб.</div>
                        </div>
                        <button className="btn btn-add">
                            <GrFormClose className="icon cart-item__icon" />
                        </button>
                    </div>
                </div>
                <div className="cart-footer">
                    <ul className="cart-footer-list">
                        <li className="cart-footer-list__item">
                            <span className="cart-footer__title">Итого:</span>
                            <div className="cart-footer__line"></div>
                            <h4 className="cart-footer__price">21 498 руб. </h4>
                        </li>
                        <li className="cart-footer-list__item">
                            <span className="cart-footer__title">Налог 5%:</span>
                            <div className="cart-footer__line"></div>
                            <h4 className="cart-footer__price">21 498 руб. </h4>
                        </li>
                    </ul>
                    <button className=" btn cart-footer__btn cart-btn">Оформить заказ <BsArrowRightShort className="cart-btn-icon" size={32} /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;