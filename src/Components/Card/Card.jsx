import React from 'react';
import './Card.css';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import img from "../../images/sneakers1.png";


function Card() {
    return (
        <div className="cards-item">
            <button className="btn card-item__favorite-btn"><MdFavoriteBorder /></button>
            <img width={133} height={112} src={img} alt="sneakers img" />
            <h3 className="cards-item__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className="cards-item__info">
                <div className="cards-item__price">
                    <span className="cards-item__price-title">Цена:</span>
                    <div className="card-price">12 999 руб.</div>
                </div>
                <button className="btn btn-add"><AiOutlinePlus className="icon" /></button>
            </div>
        </div>
    )
}

export default Card;