import React from "react"
import List from "./List"

function GroceryList(props) {
    return (
        <div>
            <form className="inputForm" >
                <input
                    type="text"
                    placeholder="Vul je boodschappen in"

                ></input>
                <button>Voeg toe</button>
            </form>
            <h2>Boodschappenlijst</h2>
            <List item={props.item} onClick={props.onClick}/>
        </div>
    )

}

export default GroceryList
