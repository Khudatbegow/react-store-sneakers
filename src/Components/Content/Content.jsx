import React from 'react';
import "./Content.css";
import Card from '../Card/Card';
import { FiSearch } from 'react-icons/fi';

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    )
}

export default Content;