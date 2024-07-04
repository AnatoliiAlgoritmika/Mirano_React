//import styles from './Goods.module.css'

import Cart from "../Cart/Cart";
import goodsArray from '../../goodsArray'
import Good from "./Good";

const Goods = () => {
    return (
        <section className="goods">
            <div className="container goods__container">
                <div className="goods__box">
                    <h2 className="goods__title">Цветы</h2>

                    <ul className="goods__list">

                        {goodsArray.map(good =>
                            <Good key={good.id} good={good} />

                        )}

                    </ul>
                </div>

                <Cart />


            </div>
        </section>
    )
}

export default Goods;

{/* ! альтернативный способ передачи props */ }
{/* <Good key={good.id} {...good} /> */ }