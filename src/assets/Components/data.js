const items = [
        { id: 1, name: "Hamburger", price: 100, image: "./assets/hamburger.svg" },
        { id: 2, name: "Pizza", price: 200, image: "./assets/pizza.svg" },
        { id: 3, name: "Chicken Nuggets", price: 300, image: "./assets/chicken.svg" },
        { id: 4, name: "Submarine Sandwich", price: 300, image: "./assets/submarine.svg" },
        { id: 5, name: "Steak", price: 800, image: "./assets/steak.svg" },
    ];



const orders_data = [
        {id:1, name:"Sumit Saha", items:3, amount:900, status:"PENDING"},
        {id:2, name:"Akash Ahmed", items:5, amount:1200, status:"DELIVERED"},
        {id:3, name:"Saad Hasan", items:2, amount:500, status:"PENDING"},
        {id:4, name:"MD Salahuddin", items:2, amount:200, status:"PENDING"},
        {id:5, name:"Ferdous", items:6, amount:1700, status:"PENDING"},
        {id:6, name:"Rafe", items:4, amount:1200, status:"DELIVERED"},
        {id:7, name:"Sarwar", items:1, amount:100, status:"PENDING"},
        {id:8, name:"Obaidul", items:1, amount:300, status:"PENDING"},
    ]


export {items, orders_data};