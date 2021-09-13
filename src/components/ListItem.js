import React from "react"

function ListItem(props) {
    const {item} = props
    return (
        <div className="list-item">
            <li
                key={item.id}
                id={item.id}
                onClick={props.onClick}
            >
                {item.amount ? `${item.title} hoeveelheid: ${item.amount}`: `${item.title}` }
            </li>
            {props.deleteItem ? <button className="icon-trash" onClick={props.deleteItem} value={item.id}></button> : null}
        </div>
    )
}

export default ListItem