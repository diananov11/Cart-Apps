import Counter from "./Counter"


const CartItem = ({ image, price, title }) => {

  return (

    <>
      <div className="card container m-3 shadow">
        {/* <div className="d-flex justify-content-between align-items-center"> */}
        <div className="row align-items-center justify-content-between">
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
            <Counter />
          </div>
          <div className="col-2">
            <h6>$subtotal</h6>
          </div>
        </div>
      </div>


      <div className="card-body">



      </div>




    </>
  )
}

export default CartItem
