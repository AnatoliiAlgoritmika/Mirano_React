//import styles from './Good.module.css'

const Good = ({ good }) => {
    return (
        <li className="goods__item">
            <article className="goods__card card"><img className="card__image"
                src={good.img}
                alt={good.dateDelivery} />
                <div className="card__content">
                    <h3 className="card__title">{good.title}</h3>
                    <div className="card__footer">
                        <p className="card__date-delivery">{good.dateDelivery}</p><button
                            className="card__button">{good.price}&nbsp;₽</button>
                    </div>
                </div>
            </article>
        </li>
    )
}

export default Good;