import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div>
            <h2>Winkelmand</h2>
            <List item={props.item}/>
        </div>
    )

}

export default ShoppingCart