
// import { useState } from "react";
// import CartItem from "./CartItem"


// const CartList = ({ data }) => {

//   const [quantity, setQuantity] = useState([
//     { id: 1, counter: 1, subtotal: 0 },
//     { id: 2, counter: 3, subtotal: 0 },
//     { id: 3, counter: 5, subtotal: 0 },
//     { id: 4, counter: 5, subtotal: 0 },
//     { id: 5, counter: 5, subtotal: 0 },
//   ]);

//   const totalCounter = quantity.reduce((accumulator, item) => {
//     return accumulator + item.subtotal;
//   }, 0);

//   return (
//     <>
//       <div className="container">
//         {
//           data.map((item, index) => < CartItem key={index} id={item.id} title={item.title} price={item.price} image={item.image} quantity={quantity} setQuantity={setQuantity} />)}
//       </div>
//       <h1>{totalCounter}</h1>
//     </>
//   )
// }

// export default CartList


import CartItem from "./CartItem";
const CartList = ({ data, quantity, setQuantity, totalPrice }) => {

  const updateQuantity = (id, newCounter) => {
    setQuantity(prev =>
      prev.map(item =>
        item.id === id ? { ...item, counter: newCounter } : item
      )
    );
  };

  return (
    <>
      <div className="container">
        {data.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={quantity}
            setQuantity={updateQuantity}
          />
        ))}
        <h1 className="text-end">Subtotal: ${totalPrice.toFixed(2)}</h1>
      </div>
    </>
  );
};

export default CartList;

