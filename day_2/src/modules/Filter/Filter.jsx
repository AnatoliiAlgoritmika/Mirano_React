//import styles from './Filter.module.css'

import { useState } from "react";
import Choices from "../Choices/Choices";

const Filter = () => {

    const [isOpen, setOpen] = useState(null)

    const handleChoicesToggle = (index) => {
        setOpen(isOpen === index ? null : index)
    }

    return (
        <section className="filter">
            <h2 className="visually-hidden"></h2>
            <div className="container">
                <form className="filter__form">
                    <fieldset className="filter__group">
                        <input className="filter__radio" type="radio" name="type"
                            value="bouquets" id="flower" checked />
                        <label className="filter__label filter__label_flower"
                            htmlFor="flower">Цветы</label>

                        <input className="filter__radio" type="radio" name="type" value="toys"
                            id="toys" />
                        <label className="filter__label filter__label_toys"
                            htmlFor="toys">Игрушки</label>

                        <input className="filter__radio" type="radio" name="type"
                            value="postcards" id="postcard" />
                        <label className="filter__label filter__label_postcard"
                            htmlFor="postcard">Открытки</label>
                    </fieldset>

                    <fieldset className="filter__group filter__group_choices">

                        <Choices className={'filter__choices choices'} buttonLabel={'Цена'} isOpen={isOpen === 1} handleToggle={() => handleChoicesToggle(1)}>
                            <div className="choices__box filter__choices-box">
                                <fieldset className="filter__price">
                                    <input className="filter__input-price" type="text" name="minPrice"
                                        placeholder="от" />
                                    <input className="filter__input-price" type="text" name="maxPrice"
                                        placeholder="до" />
                                </fieldset>
                            </div>
                        </Choices>

                        <Choices className="filter__choices filter__choices_type choices" buttonLabel={'Тип товара'} isOpen={isOpen === 2} handleToggle={() => handleChoicesToggle(2)}>

                            <div
                                className="choices__box filter__choices-box filter__choices-box_type">
                                <ul className="filter__type-list">
                                    <li className="filter__type-item">
                                        <button className="filter__type-button"
                                            type="button">Монобукеты</button>
                                    </li>
                                    <li className="filter__type-item">
                                        <button className="filter__type-button" type="button">Авторские
                                            букеты</button>
                                    </li>
                                    <li className="filter__type-item">
                                        <button className="filter__type-button" type="button">Цветы в
                                            коробке</button>
                                    </li>
                                    <li className="filter__type-item">
                                        <button className="filter__type-button" type="button">Цветы в
                                            корзине</button>
                                    </li>
                                    <li className="filter__type-item">
                                        <button className="filter__type-button" type="button">Букеты из
                                            сухоцветов</button>
                                    </li>
                                </ul>
                            </div>
                        </Choices>

                    </fieldset>
                </form>
            </div>
        </section>
    )
}

export default Filter;