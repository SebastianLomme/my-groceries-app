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
                { id: 6, title: "Bier", },
                { id: 7, title: "Melk", },
                { id: 8, title: "Eieren", },
                { id: 9, title: "Vlees", },
                { id: 10, title: "Beleg", },
            ]
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
    }

    emptyCart() {
        this.setState({ CartItems: [] })
    }

    handleClickGroceryItem(e) {
        const target = e.target
        const value = target.innerHTML
        const [filterItem] = this.state.groceryItems.filter(item => item.title === value)
        console.log("object: ", filterItem)
        this.setState(prev => {
            const newArray = []
            newArray.push(...prev.CartItems, filterItem)
            return {
                CartItems: newArray
            }
        })
        console.log(this.state)
    }



    render() {
        return (
            <div>
                <GroceryList item={this.state.groceryItems} onClick={this.handleClickGroceryItem} />
                <ShoppingCart item={this.state.CartItems} onClick={this.emptyCart} />
            </div>
        )
    }
}

export default Container