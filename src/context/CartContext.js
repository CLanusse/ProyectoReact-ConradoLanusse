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

    const totalCart = ()=> {
        return cart.reduce((acc, itemCart) => (acc += (itemCart.quantity * itemCart.item.precio)),0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCart}}>
            {children}
        </CartContext.Provider>
    )
}