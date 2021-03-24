
const getStock = ()=>{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve([
                {id: 1, title: "Whisky 1", description: "Un buen whisky", img: '/img/whisky.jpg', stock: 20, precio: 2500},
                {id: 2, title: "Whisky 2", description: "Un gran whisky", img: '/img/whisky.jpg', stock: 15, precio: 3500},
                {id: 3, title: "Whisky 3", description: "Un muy buen whisky", img: '/img/whisky.jpg', stock: 12, precio: 4000},
                {id: 4, title: "Whisky 4", description: "Un super whisky", img: '/img/whisky.jpg', stock: 10, precio: 8000},
                {id: 5, title: "Whisky 5", description: "Un archi whisky", img: '/img/whisky.jpg', stock: 8, precio: 11000},
                {id: 6, title: "Whisky 6", description: "Un superduper whisky", img: '/img/whisky.jpg', stock: 4, precio: 15000}
            ])

        }, 2000)
    })
}

export default getStock;