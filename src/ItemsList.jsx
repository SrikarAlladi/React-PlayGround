const ItemsList = ({data,showData}) => {

    return (
        <div className="itemList">
        { (showData) && (data).map((x,index) => {
            return (
                <div key={index} className="item">
                    {x}
                </div>
            )
        })}
        </div>
    )

}

export default ItemsList;