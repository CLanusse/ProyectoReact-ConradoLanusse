import firebase from 'firebase/app'
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyA9snkxP8h_-RrnSYBF8Y9DsVOKRIdIyg8",
    authDomain: "johncbebidas.firebaseapp.com",
    projectId: "johncbebidas",
    storageBucket: "johncbebidas.appspot.com",
    messagingSenderId: "145650253568",
    appId: "1:145650253568:web:1b46d13a0cbf1e2e23bde5"
})

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}