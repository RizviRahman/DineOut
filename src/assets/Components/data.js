const items = [
        { id: 1, name: "Hamburger", price: 100, image: "./assets/hamburger.svg" },
        { id: 2, name: "Pizza", price: 200, image: "./assets/pizza.svg" },
        { id: 3, name: "Chicken Nuggets", price: 300, image: "./assets/chicken-nuggets.svg" },
        { id: 4, name: "Sub Sandwich", price: 300, image: "./assets/sub-sandwich.svg" },
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

const monthlyData = [
  { month: 'January', revenue: 1200, items: [
    { name: "Hamburger", count: 38 },
    { name: "Pizza", count: 45 },
    { name: "Chicken Nuggets", count: 18 },
    { name: "Sub Sandwich", count: 12 },
    { name: "Steak", count: 15 },
    { name: "Rice Bowl", count: 22 },
    { name: "Lemonade", count: 30 }
  ]},
  { month: 'February', revenue: 1500, items: [
    { name: "Hamburger", count: 42 },
    { name: "Pizza", count: 52 },
    { name: "Chicken Nuggets", count: 28 },
    { name: "Sub Sandwich", count: 20 },
    { name: "Steak", count: 18 },
    { name: "Rice Bowl", count: 25 },
    { name: "Lemonade", count: 33 }
  ]},
  { month: 'March', revenue: 1750, items: [
    { name: "Hamburger", count: 48 },
    { name: "Pizza", count: 58 },
    { name: "Chicken Nuggets", count: 26 },
    { name: "Sub Sandwich", count: 19 },
    { name: "Steak", count: 22 },
    { name: "Rice Bowl", count: 30 },
    { name: "Lemonade", count: 36 }
  ]},
  { month: 'April', revenue: 1620, items: [
    { name: "Hamburger", count: 44 },
    { name: "Pizza", count: 55 },
    { name: "Chicken Nuggets", count: 24 },
    { name: "Sub Sandwich", count: 17 },
    { name: "Steak", count: 20 },
    { name: "Rice Bowl", count: 28 },
    { name: "Lemonade", count: 34 }
  ]},
  { month: 'May', revenue: 1800, items: [
    { name: "Hamburger", count: 50 },
    { name: "Pizza", count: 63 },
    { name: "Chicken Nuggets", count: 29 },
    { name: "Sub Sandwich", count: 21 },
    { name: "Steak", count: 23 },
    { name: "Rice Bowl", count: 32 },
    { name: "Lemonade", count: 38 }
  ]},
  { month: 'June', revenue: 1950, items: [
    { name: "Hamburger", count: 53 },
    { name: "Pizza", count: 68 },
    { name: "Chicken Nuggets", count: 32 },
    { name: "Sub Sandwich", count: 24 },
    { name: "Steak", count: 26 },
    { name: "Rice Bowl", count: 35 },
    { name: "Lemonade", count: 40 }
  ]},
  { month: 'July', revenue: 2100, items: [
    { name: "Hamburger", count: 58 },
    { name: "Pizza", count: 72 },
    { name: "Chicken Nuggets", count: 34 },
    { name: "Sub Sandwich", count: 26 },
    { name: "Steak", count: 29 },
    { name: "Rice Bowl", count: 38 },
    { name: "Lemonade", count: 44 }
  ]},
  { month: 'August', revenue: 2000, items: [
    { name: "Hamburger", count: 56 },
    { name: "Pizza", count: 70 },
    { name: "Chicken Nuggets", count: 33 },
    { name: "Sub Sandwich", count: 25 },
    { name: "Steak", count: 27 },
    { name: "Rice Bowl", count: 36 },
    { name: "Lemonade", count: 42 }
  ]},
  { month: 'September', revenue: 1850, items: [
    { name: "Hamburger", count: 51 },
    { name: "Pizza", count: 65 },
    { name: "Chicken Nuggets", count: 30 },
    { name: "Sub Sandwich", count: 22 },
    { name: "Steak", count: 25 },
    { name: "Rice Bowl", count: 33 },
    { name: "Lemonade", count: 39 }
  ]},
  { month: 'October', revenue: 2200, items: [
    { name: "Hamburger", count: 62 },
    { name: "Pizza", count: 78 },
    { name: "Chicken Nuggets", count: 36 },
    { name: "Sub Sandwich", count: 28 },
    { name: "Steak", count: 31 },
    { name: "Rice Bowl", count: 40 },
    { name: "Lemonade", count: 46 }
  ]},
  { month: 'November', revenue: 2050, items: [
    { name: "Hamburger", count: 59 },
    { name: "Pizza", count: 74 },
    { name: "Chicken Nuggets", count: 34 },
    { name: "Sub Sandwich", count: 26 },
    { name: "Steak", count: 28 },
    { name: "Rice Bowl", count: 37 },
    { name: "Lemonade", count: 43 }
  ]},
  { month: 'December', revenue: 2400, items: [
    { name: "Hamburger", count: 68 },
    { name: "Pizza", count: 85 },
    { name: "Chicken Nuggets", count: 40 },
    { name: "Sub Sandwich", count: 30 },
    { name: "Steak", count: 34 },
    { name: "Rice Bowl", count: 45 },
    { name: "Lemonade", count: 50 }
  ]}
];




export {items, orders_data, monthlyData};