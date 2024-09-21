import CartItem from "./CartItem"


const CartList = ({ data }) => {
  return (
    <>
      <div className="container">
        {
          data.map((item, index) => < CartItem key={index} item={item} image={item.image} />)}
      </div>
    </>
  )
}

export default CartList
