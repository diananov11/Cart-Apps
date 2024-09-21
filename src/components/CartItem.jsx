// import Counter from "./Counter"
// import { useState } from "react"


// const CartItem = ({ id, image, price, title, quantity, setQuantity }) => {
//   const [counter, setCounter] = useState(1)

//   if (id === quantity[i].id) {
//     setQuantity(counter)
//   }


//   return (

//     <>
//       <div className="card container m-3 shadow">
//         <div className="row align-items-center">
//           <div className="col-2">
//             <img src={`${image}`} className="rounded img-fluid m-4" style={{ height: "8rem" }} alt="..." />
//           </div>
//           <div className="col-3">
//             <h6>{title}</h6>
//           </div>
//           <div className="col-2">
//             <h6>${price}</h6>
//           </div>
//           <div className="col-3">
//             <Counter counter={counter} setCounter={setCounter} />
//           </div>
//           <div className="col-2">
//             <h6>${(price * counter).toFixed(2)}</h6>
//           </div>
//         </div>
//       </div>


//       <div className="card-body">



//       </div>




//     </>
//   )
// }

// export default CartItem


import Counter from "./Counter";
import { useState, useEffect } from "react";

const CartItem = ({ id, image, price, title, quantity, setQuantity }) => {
  const [counter, setCounter] = useState(quantity.find(item => item.id === id)?.counter || 1);

  useEffect(() => {
    setQuantity(id, counter);
  }, [counter]);

  let total = (price * counter).toFixed(2)

  return (
    <>
      <div className="card container m-3 shadow">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={image} className="rounded img-fluid m-4" style={{ height: "8rem" }} alt="..." />
          </div>
          <div className="col-3">
            <h6>{title}</h6>
          </div>
          <div className="col-2">
            <h6>${price}</h6>
          </div>
          <div className="col-3">
            <Counter counter={counter} setCounter={setCounter} />
          </div>
          <div className="col-2">
            <h6>${total}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
