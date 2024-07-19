//import styles from './Cart.module.css'

import CartItem from "./CartItem";
import goodsArray from '../../goodsArray'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";
import { openOrder } from "../../redux/orderSlice";

const Cart = () => {

    const isOpen = useSelector((state) => state.cart.isOpen)

    // ! мы используем хук useDispatch для получения функции dispatch, которая позволяет отправлять действия в хранилище Redux.
    const dispatch = useDispatch()
    const handleCartClose = () => {
        dispatch(toggleCart())
    }

    const handleOrderOpen = () => {
        dispatch(openOrder())
    }

    if (!isOpen) return null

    return (
        <section className="cart cart_open">
            <div className="cart__container">
                <div className="cart__header">
                    <h3 className="cart__title">Ваш заказ</h3>

                    <button className="cart__close" onClick={handleCartClose}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="5.70715" width="1" height="25"
                                transform="rotate(-45 5 5.70715)" fill="#D17D2F" />
                            <rect x="22.6777" y="5" width="1" height="25"
                                transform="rotate(45 22.6777 5)" fill="#D17D2F" />
                        </svg>
                    </button>
                </div>

                <p className="cart__date-delivery">сегодня в 14:00</p>

                <ul className="cart__list">

                    {goodsArray.map(good =>
                        <CartItem key={good.id} {...good} />
                    )}

                </ul>

                <div className="cart__footer">
                    <button className="cart__order-btn" onClick={handleOrderOpen}>Оформить</button>
                    <p className="cart__price cart__price_total">0&nbsp;₽</p>
                </div>
            </div>
        </section>
    )
}

export default Cart;