import { getFirestore } from "./client"


export const getProducts = (id) => {
    return new Promise ((resolve)=>{

        const database = getFirestore()
        const itemCollection = database.collection('items')

        if (id === 'catalogo') {
            itemCollection.get().then( res => {
                const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
                resolve(data)
            })
        } else {
            itemCollection.where('category','==',`${id}`).get().then( res => {
                const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
                resolve(data)
            })
        }

    })

}

