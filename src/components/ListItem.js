import React from "react"

function ListItem(props) {
    const {item} = props
    return (
        <li
            key={item.id}
            value={item.title}
            onClick={props.onClick}
        >
            {item.title}
        </li>
    )
}

export default ListItem