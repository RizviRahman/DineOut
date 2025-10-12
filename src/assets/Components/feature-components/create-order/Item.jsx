import { useState } from "react";

export default function Item({item}) {
    console.log(item);
    const {name, price, image} = item;
    const [quantity, setQuantity] = useState(0);
    // setQuantity(quantity+1)
    return (
        <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div className="flex items-center">
                <div className="w-12 h-12   flex items-center justify-center mr-3">
                    <img src={image /*"./assets/hamburger.svg"*/} alt="Hamburger" className="w-10 h-10" />
                </div>
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-xs text-gray-400">BDT {price}</p>
                </div>
                {quantity>0 &&
                <div
                    className="w-9 h-9 flex items-center justify-center ml-2 bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                     {quantity}
                </div>}
                
            </div>
            <div className="flex items-center">
                {quantity>0 &&
                <button onClick={()=>setQuantity(quantity-1)}
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd" />
                    </svg>
                </button>}
                <button onClick={()=>setQuantity(quantity+1)}
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            
        </div>
    )
}