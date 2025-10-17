const items = [
        { id: 1, name: "Hamburger", price: 100, image: "./assets/hamburger.svg" },
        { id: 2, name: "Pizza", price: 200, image: "./assets/pizza.svg" },
        { id: 3, name: "Chicken Nuggets", price: 300, image: "./assets/chicken.svg" },
        { id: 4, name: "Sub Sandwich", price: 300, image: "./assets/submarine.svg" },
        { id: 5, name: "Steak", price: 800, image: "./assets/steak.svg" },
        { id: 6, name: "Rice Bowl", price: 150, image: "./assets/rice-bowl.svg" },
        { id: 7, name: "Lemonade", price: 80, image: "./assets/lemonade.svg" },
    ];



const orders_data = [
        {id:1, name:"Sumit Saha", items:3, amount:900, status:"PENDING"},
        {id:2, name:"Akash Ahmed", items:5, amount:1200, status:"DELIVERED"},
        {id:3, name:"Saad Hasan", items:2, amount:500, status:"PENDING"},
        {id:4, name:"MD Salahuddin", items:2, amount:200, status:"PENDING"},
        {id:5, name:"Ferdous Jahan", items:6, amount:1700, status:"PENDING"},
        {id:6, name:"Rony", items:4, amount:1200, status:"DELIVERED"},
        {id:7, name:"Sarwar Islam", items:1, amount:100, status:"PENDING"},
        {id:8, name:"Obaidul Haque", items:1, amount:300, status:"PENDING"},
        {id:9, name:"Rafsan Jani", items:3, amount:800, status:"DELIVERED"},
        {id:10, name:"Sabbir Rahman", items:2, amount:400, status:"DELIVERED"},
    ]


export {items, orders_data};