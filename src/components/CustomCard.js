const CustomCard = ({ type, item, title, selectDay, iconName, detail, degreeCode }) => {
    return (
        <div onClick={() => type == 'small' ? selectDay(item) : null} className={`day-card ${type === 'big' ? "day-card-big" : "day-card-small"}`}>
            <h5 className="day-card-date">{title}</h5>
            <div className="day-card-icon" style={{ fontSize: type === 'big' ? '3.2rem' : '2rem' }}>
                <i className={`wi ${iconName}`}></i>
            </div>
            <h5 className="day-card-temp">{detail} {type == 'small' ? degreeCode : null}</h5>
        </div>
    )
}

export default CustomCard