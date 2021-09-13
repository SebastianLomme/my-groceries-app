import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props) {
    return (
        <div>
            <InputField 
            handleSubmit={props.handleSubmit} 
                handleInput={props.handleInput}
                inputValue={props.inputValue}
            />
            <h2>Boodschappenlijst</h2>
            <List item={props.item} onClick={props.onClick}/>
        </div>
    )

}

export default GroceryList
