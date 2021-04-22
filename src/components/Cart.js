import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getFirestore } from '../firebase/client'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const Cart = ()=>{

    const {cart, removeItem, clear, totalCart} = useContext(CartContext)

    const generarOrden = async ()=> {
        // tengo la db
        const db = getFirestore()

        const ordersColection = db.collection('orders')

        let orden = {
            buyer: {name: 'Conrado', phone: 'mi telefono', email: 'mimail@mail.com'},
            items: cart.map(cartItem => ({id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.precio, quantity: cartItem.quantity})),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalCart()
        }
        
        // pido items para comparar stock

        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(el => el.item.id)
        ) 

        const query = await itemsToUpdate.get()
        const batch = db.batch()
        const outOfStock = []

        query.docs.forEach( (docSnapshot, i) => {
            if (docSnapshot.data().stock >= cart[i].quantity) {
                batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - cart[i].quantity})
            } else {
                outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
            }
        });

        if (!outOfStock.length) {
            batch.commit().then( res => {
                console.log('commit success ' + res) 

                ordersColection.add(orden)
                    .then(res => {
                        console.log(res.id)
                        clear()
                    })
                    .catch(err => console.log(err))
                }
            )
        } else {
            console.log(outOfStock)
            outOfStock.forEach(el=> console.log('No hay stock de: ' + el.title))
        }
    }

    return (
        
        <div className="cartContainer">

        {
            !cart.length ? <div className="emptyCart">
                                <h2>No hay items en el carrito</h2>
                                <Link to='/category/todos'>Ir al Shop</Link>
                            </div> 
                        :
 
                        <>
                            <h2>Tu compra</h2>
                            {cart.map(itemCart => (
                                <div className="cartItem" key={itemCart.item.id}>
                                    <div className="cartItemInfo">
                                        <img src={itemCart.item.img} alt={itemCart.item.title}/>
                                        <div>
                                            <p className="cartItemTitle">{itemCart.item.title}</p>
                                            <p className="cartItemQuantity">Cantidad: {itemCart.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="cartItemPrice">Precio: ${itemCart.item.precio * itemCart.quantity}</p>
                                    <button onClick={()=> removeItem(itemCart.item.id)}><FontAwesomeIcon icon={faTrash} className="cartItemDelete"></FontAwesomeIcon></button>
                                </div>
                            ))}

                            <div className="totalCart">
                                <p>Total compra: ${totalCart()}</p>
                            </div>

                            <div className="cartButtons">
                                <button onClick={()=> clear()}>Vaciar carrito</button>
                                <button onClick={()=> generarOrden()}>Finalizar compra</button>
                            </div>
                        </>
        }
        
        </div>
    )


}