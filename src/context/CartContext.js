import React, { useState } from 'react'

export const CartContext = React.createContext([])


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (newItem, newQuantity) => {

        const { quantity = 0} = cart.find(e => e.item.id === newItem.id) || {}
        const newCart = cart.filter(el => el.item.id !== newItem.id)
        setCart([...newCart, {item: newItem, quantity: quantity + newQuantity}])
        
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(el => el.item.id !== itemId))
    }

    const clear = ()=>{
        setCart([])
    }

    const isInCart = (id) => {
        const itemFound = cart.find(el => el.item.id === id)
        return itemFound ? true : false
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}