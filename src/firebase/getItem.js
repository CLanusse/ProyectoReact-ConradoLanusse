import { getFirestore } from "./client"


export const getItem = (id) => {
    return new Promise ((resolve)=>{

        const database = getFirestore()
        const itemCollection = database.collection('items')

        const item = itemCollection.doc(id)
        item.get().then( doc => {
            resolve({id: doc.id, ...doc.data()})
        })

    })

}

