import React, { Component } from "react"
import GroceryList from "./GroceryList"
import ShoppingCart from "./ShoppingCart"

class Container extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id: 5, title: "Brood", },
                { id: 6, title: "Melk", },
                { id: 7, title: "Eieren", },
                { id: 8, title: "Vlees", },
                { id: 9, title: "Beleg", },
            ],
            CartItems: [
                { id: 1, title: "Bier", amount: 2 },
                { id: 2, title: "Choco", amount: 1 },
                { id: 3, title: "Gehakt", amount: 3 },
                { id: 4, title: "Boter", amount: 3 },
            ],
            inputValue: "",
            highID: 10,
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(e) {
        this.setState(prev => {
            const newArray = prev.groceryItems.filter(item => item.id !== Number(e.target.value))
            return { groceryItems: newArray}
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.inputValue === "") {
            return
        } else {
            const NewGroseryItem = {
                id: this.state.highID, title: this.state.inputValue,
            }
            const newGroseryArray = []
            this.setState((prev) => {
                newGroseryArray.push(...prev.groceryItems, NewGroseryItem)
                return {
                    groceryItems: newGroseryArray,
                    inputValue: "",
                    highID: prev.highID + 1
                }

            })
        }
    }

    handleInput(e) {
        this.setState({ inputValue: e.target.value })
    }

    emptyCart() {
        this.setState({ CartItems: [] })
    }

    addAmountToItem(item) {
        this.setState(prev => ({
            CartItems: prev.CartItems.map(
                element => element.title.toLowerCase() === item.title.toLowerCase() ? { ...element, amount: element.amount + 1 } : element
            )
        })
        )
    }

    handleClickGroceryItem(e) {
        const target = e.target
        const value = target.innerHTML
        const [filterItem] = this.state.groceryItems.filter(item => item.title === value)
        const filterCart = this.state.CartItems.find(item => item.title.toLocaleLowerCase() === filterItem.title.toLocaleLowerCase())
        if (filterCart) {
            this.addAmountToItem(filterCart)
        } else {
            this.setState(prev => {
                const newObject = {
                    ...filterItem,
                    amount: 1
                }
                const newArray = []
                newArray.push(...prev.CartItems, newObject)
                return {
                    CartItems: newArray
                }
            }
            )

        }



    }



    render() {
        return (
            <div className="container">
                <GroceryList
                    item={this.state.groceryItems}
                    onClick={this.handleClickGroceryItem}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    inputValue={this.state.inputValue}
                    deleteItem={this.deleteItem}
                />
                <ShoppingCart
                    item={this.state.CartItems}
                    onClick={this.emptyCart}
                />
            </div>
        )
    }
}

export default Container