import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initionalComponent = {
  loading: false,
  total: 0,
  cart: cartItems,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initionalComponent)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE_CART', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.cart])

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url);
    const data = await response.json()
    dispatch({ type: 'DISPLAY_ITEM', payload: data })
  }

  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
