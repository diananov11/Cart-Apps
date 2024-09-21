import Counter from "./Counter"
import { useEffect, useState } from "react"


const CartItem = ({ image, price, title }) => {
  const [counter, setCounter] = useState(1)



  return (

    <>
      <div className="card container m-3 shadow">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={`${image}`} className="rounded img-fluid m-4" style={{ height: "8rem" }} alt="..." />
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
            <h6>${price * counter}</h6>
          </div>
        </div>
      </div>


      <div className="card-body">



      </div>




    </>
  )
}

export default CartItem
