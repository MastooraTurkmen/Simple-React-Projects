const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE_CART') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }
    return state
}

export default reducer;