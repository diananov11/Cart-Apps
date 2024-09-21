import Counter from "./Counter"


const CartItem = ({ image }) => {

  return (

    <>
      <div className="card container m-3 shadow">
        <div className="d-flex justify-content-between">
          <img src={`${image}`} className="rounded img-fluid m-4" style={{ height: "8rem" }} alt="..." />
          <Counter />
        </div>
      </div>

      <div className="card-body">



      </div>




    </>
  )
}

export default CartItem
