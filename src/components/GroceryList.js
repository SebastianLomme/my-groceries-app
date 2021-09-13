import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
    return (
        <div>
            <h2>Boodschappenlijst</h2>
            <InputField
                handleSubmit={props.handleSubmit}
                handleInput={props.handleInput}
                inputValue={props.inputValue}
            />
            <List
                item={props.item}
                onClick={props.onClick}
                deleteItem={props.deleteItem}
            />
        </div>
    )

}

export default GroceryList
