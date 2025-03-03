import React, { useState } from "react";
import cartPic from "../assets/Frame 1000004688 (1).svg";
import cartPics from "../assets/Frame 1000004688 (2).svg";
import cartImg from "../assets/Frame 1000004688.svg";

const CartPreview = () => {
  // State for quantities of each product
  const [quantities, setQuantities] = useState({
    1: 1, // Quantity for first item
    2: 1, // Quantity for second item
    3: 1, // Quantity for third item
  });

  // Function to handle incrementing the quantity
  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Prevent going below 1
    }));
  };

  return (
    <main>
      <div className="container my-2">
        <h2 className="font-[600] text-[24px]">My Cart Preview</h2>

        {/* First item */}
        <div className="w-[348px] mx-auto flex items-center space-x-4 py-[20px] relative">
          <img className="w-[95px]" src={cartImg} alt="cart-preview" />
          <div className="ml-4">
            <p className="text-[13px] absolute top-4">Oud Touch Franck Oliver</p>
            <div className="flex items-center space-x-4">
              <button
                className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => decrementQuantity(1)}
              >
               <div className="absolute bottom-0.5 left-1 top-1 right-1 ">-</div>
              </button>
              <span>{quantities[1]}</span>
              <button
               className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => incrementQuantity(1)}
              >
                <div className="absolute bottom-0.5 left-1 top-1 right-1 ">+</div>
              </button>
            </div>
          </div>
        </div>

        {/* Second item */}
        <div className="w-[348px] mx-auto flex items-center space-x-4 relative">
          <img className="w-[95px]" src={cartPic} alt="cart-preview" />
          <div className="ml-4">
            <p className="text-[13px] absolute top-0 mb-[10px]">Timeless Bouquet</p>
            <div className="flex items-center space-x-4">
              <button
                className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => decrementQuantity(2)}
              >
                 <div className="absolute bottom-0.5 left-1 top-1 right-1 ">-</div>
                
              </button>
              <span>{quantities[2]}</span>
              <button
                className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => incrementQuantity(2)} 
              >
                <div className="absolute bottom-0.5 left-1 top-1 right-1 ">+</div>
                
              </button>
            </div>
          </div>
        </div>

        {/* Third item */}
        <div className="w-[348px] mx-auto flex items-center space-x-4 py-[20px] relative">
          <img className="w-[95px]" src={cartPics} alt="cart-preview" />
          <div className="ml-4">
            <p className="text-[13px] absolute top-4">Asad Mousouff</p>
            <div className="flex items-center space-x-4">
              <button
                 className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => decrementQuantity(3)}
              >
                <div className="absolute bottom-0.5 left-1 top-1 right-1 ">-</div>
              </button>
              <span>{quantities[3]}</span>
              <button
                className="bg-[#8D34FF] rounded-[2.79px] p-[15px] gap-[9.3px] w-[5px] cursor-pointer relative"
                onClick={() => incrementQuantity(3)}
              >
                 <div className="absolute bottom-0.5 left-1 top-1 right-1 ">+</div>
                
              </button>
             
            </div>
            <br />
            {/* <div>
              <h3>N6,000</h3>
              <button>Remove</button>
              </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPreview;
