//import styles from './Choices.module.css'



const Choices = ({ className, buttonLabel, children, isOpen, handleToggle }) => {



    return (
        <div className={className}>
            <button className="filter__select choices__btn"
                type="button" onClick={handleToggle}>{buttonLabel}</button>

            {isOpen && <>{children}</>}
        </div>
    )
}

export default Choices;