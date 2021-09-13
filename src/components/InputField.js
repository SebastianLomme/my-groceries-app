import React from "react"

function InputField(props) {
    return (
        <form
            className="inputForm"
            onSubmit={props.handleSubmit}
        >
            <input
                type="text"
                placeholder="Vul je boodschappen in"
                value={props.inputValue}
                onChange={props.handleInput}
            ></input>
            <button>Voeg toe</button>
        </form>
    )
}

export default InputField


