const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE_CART') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }

    if (action.type === 'TOGGLE_AMOUNT') {
        let temCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'increase') {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                if (action.payload.type === 'decrease') {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return { ...state, cart: temCart }
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

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'DISPLAY_ITEM') {
        return { ...state, cart: action.payload, loading: false }
    }

    return state
}

export default reducer;