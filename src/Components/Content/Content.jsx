import React from 'react';
import "./Content.css";
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import img from "../../images/sneakers1.png";

function Content() {
    return (
        <main className="content">
            <div className="content-wrapper">
                <div className="content-header">
                    <h1 className="content-title">Все кроссовки</h1>
                    <div className="search">
                        <FiSearch className="icon icon-search" />
                        <input className="search-input" type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="content-card cards">
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
                </div>
            </div>
        </main>
    )
}

export default Content;