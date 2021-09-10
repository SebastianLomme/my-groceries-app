import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id: 1, title: "Brood", },
                { id: 2, title: "Melk", },
                { id: 3, title: "Eieren", },
                { id: 4, title: "Vlees", },
                { id: 5, title: "Beleg", },
            ],
            CartItems: [
                { id: 1, title: "Bier", },
                { id: 2, title: "Melk", },
                { id: 3, title: "Eieren", },
                { id: 4, title: "Vlees", },
                { id: 5, title: "Beleg", },
            ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
    }

    handleClickGroceryItem(e) {
        const target = e.target
        const value = target.value
        console.log(target)
        console.log(value)
    }



    render() {
        return (
            <div>
                <GroceryList item={this.state.groceryItems} onClick={this.handleClickGroceryItem} />
                <ShoppingCart item ={this.state.CartItems} /> 
            </div>
        )
    }
}

export default Container