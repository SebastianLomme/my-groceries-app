import React from "react"

function ListItem(props) {
    const {item} = props
    return (
        <li
            key={item.id}
            id={item.id}
            onClick={props.onClick}
        >
            {item.title}
        </li>
    )
}

export default ListItem