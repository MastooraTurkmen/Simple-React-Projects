const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE_CART') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }

    if (action.type === "INCREASE") {
        let tempItem = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })

        return { ...state, cart: tempItem }
    }

    if (action.type === "DECREASE") {
        let tempItem = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return { ...state, cart: tempItem }
    }

    if (action.type === 'GET_TOTAL') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal;
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }

    return state
}

export default reducer;