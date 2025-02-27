import React, { useState } from 'react'
import Order from './Order'
import { IoIosBasket } from "react-icons/io";
import { Link } from 'react-router-dom'; // Импорт Link

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))

    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}

        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}
const showNothing = () => {
    return (<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className="logo">women's stories</span>
                <ul className='nav'>
                    <li><Link to="/" style={{ cursor: 'pointer' }}>Главная</Link></li>
                    <li><Link to="/questions">Вопросы и ответы</Link></li>

                    <li>
                        <Link to="/register" style={{ cursor: 'pointer' }}>Кабинет</Link>
                    </li>
                </ul>
                <IoIosBasket onClick={() => setCartOpen(prevState => !prevState)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presention'></div>
        </header>
    );
};
export default Header;







