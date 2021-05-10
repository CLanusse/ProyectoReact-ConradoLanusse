import { getFirestore } from './client'
import firebase from 'firebase/app'

export const generarOrden = async (user, cart) => {

        const db = getFirestore()
        const ordersColection = db.collection('orders')

        let orden = {
            buyer: user,
            items: cart.map(cartItem => ({id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.precio, quantity: cartItem.quantity})),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: cart.reduce((acc, itemCart) => (acc += (itemCart.quantity * itemCart.item.precio)),0)
        }

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

        return new Promise((resolve, reject)=>{

            if (!outOfStock.length) {
                batch.commit().then( res => { 
    
                    ordersColection.add(orden)
                        .then(res => {
                            resolve(res.id)
                        })
                    }
                )
            } else {
                reject(outOfStock)
            }
        })
}
