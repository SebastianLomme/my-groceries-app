import React from "react"
import ListItem from "./ListItem"

function List(props) {

    const itemComponents = props.item.map((item) =>
        <ListItem
            item={item}
            key={item.id}
            onClick={props.onClick}
            value={item.title}
            deleteItem={props.deleteItem}

        />)

    return (
        <ul>
            {itemComponents}
        </ul>
    )
}


export default List